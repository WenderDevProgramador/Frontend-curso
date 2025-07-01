import Counter from '../Components/Counter'
import Title from '../Components/Title'


import useCountdown from '../hook/useCountdown'

const Countdown = () => {
    const [day, hour, minutes, second] = useCountdown('2025-12-31T00:00:00')

    return (
        <>

            <Title title={'Contagem Regressiva para 2026'} />

            <div className="countdown-container">
                <Counter title='Dias' number={day} />
                <Counter title='Horas' number={hour} />
                <Counter title='Minutos' number={minutes} />
                <Counter title='Segundos' number={second} />
            </div>
        </>

    )
}

export default Countdown