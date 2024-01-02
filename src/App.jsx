import Title from './components/Title'
import Counter from './components/Counter'

import NewYear from "./assets/newyear.jpg"

import useCountDown from './hooks/useContdown'

import './App.css'


function App() {
  
  const  [day , hour , minute , second]= useCountDown("Jan 1, 2025 00:00:00");

  return (
 <div className='app' style={{backgroundImage:`url(${NewYear})`}}>
       <div className="container">
       <Title title="Contagen regressiva para 2025"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Hora" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
          </div>  
       </div>
 </div>
  )
}

export default App
