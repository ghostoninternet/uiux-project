import "../Input/index.css"

function Input({ label, type, id }) {
  return (
    <div className="input-box">
      <input required type={type} id={id} className="input"/>
      <label htmlFor={id} className="label text--flicking">{label}</label>
    </div>
  )
}

export default Input