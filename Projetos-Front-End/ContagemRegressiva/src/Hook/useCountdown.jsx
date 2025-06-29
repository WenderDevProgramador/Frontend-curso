import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const countdown = () => {
            const countDate = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const interval = countDate - now;

            if (interval <= 0) {
                // Quando o tempo termina, zera tudo
                setDay(0);
                setHour(0);
                setMinutes(0);
                setSecond(0);
                return;
            }

            const secondMs = 1000;
            const minuteMs = secondMs * 60;
            const hourMs = minuteMs * 60;
            const dayMs = hourMs * 24;

            const dayNumber = Math.floor(interval / dayMs);
            const hourNumber = Math.floor((interval % dayMs) / hourMs);
            const minutesNumber = Math.floor((interval % hourMs) / minuteMs);
            const secondNumber = Math.floor((interval % minuteMs) / secondMs);

            setDay(dayNumber);
            setHour(hourNumber);
            setMinutes(minutesNumber);
            setSecond(secondNumber);
        };

        // Inicia imediatamente
        countdown();

        // Atualiza a cada segundo
        const timer = setInterval(countdown, 1000);

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(timer);
    }, [targetDate]);

    return [day, hour, minutes, second];
};

export default useCountdown;
