import Counter from '../Components/Counter'
import Title from '../Components/Title'


import useCountdown from '../hook/useCountdown'
import { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext.jsx'

import { Navigate } from 'react-router-dom' 



const Countdown = () => {
    const { event } = useContext(CountdownContext)

    if(!event) {
        return <Navigate to='/' />
    }   

    const eventTitle = event.title

    const eventColor = event.color  

    const [day, hour, minutes, second] = useCountdown(event.date)

    return (
        <>

            <Title title={eventTitle} eventColor={eventColor} />

            <div className="countdown-container">
                <Counter title='Dias' number={day} eventColor={eventColor} />
                <Counter title='Horas' number={hour} eventColor={eventColor} />
                <Counter title='Minutos' number={minutes} eventColor={eventColor} />
                <Counter title='Segundos' number={second}  eventColor={eventColor}/>
            </div>
        </>

    )
}

export default Countdown