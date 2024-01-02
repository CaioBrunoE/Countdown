
import Title from "../components/Title"
import Counter from "../components/Counter"
import { useContext } from "react";
import { Navigate } from "react-router-dom";


import useCountDown from '../hooks/useContdown'

import { CountdownContext } from "../context/CountdownContext";




function Countdown() {

    const { event } = useContext(CountdownContext);

    if (!event) return <Navigate to="/" />
   
    const eventTitle = event.title;

    const eventColor = event.color;

    const [day, hour, minute, second] = useCountDown(event.date);

    return (
        <>
            <Title title={eventTitle} />
            <div className="countdown-container">
                <Counter title="Dias" number={day} />
                <Counter title="Hora" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
        </>
    )
}

export default Countdown