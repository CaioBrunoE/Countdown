
import Title from "../components/Title"
import Counter from "../components/Counter"

import useCountDown from '../hooks/useContdown'


function Countdown() {
    const [day, hour, minute, second] = useCountDown("Jan 1, 2025 00:00:00");

    return (
        <>
            <Title title="Contagen regressiva para 2025" />
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