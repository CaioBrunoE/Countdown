
import "./Title.css"

function Title({ title, eventColor }) {
  return (
    <h1 className="title" style={{ color: eventColor }}>
      {title}
    </h1>
  )
}

export default Title