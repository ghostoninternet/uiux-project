import "../Input/index.css"

function Input({ label, type, id, check=false, width="300px",...InputOptions }) {
  
  let css = ""

  if(check === true) {
    css = "edit-input"
  }

  return (
    <div className={"input-box " + css} style={{width: width}}>
      <input required type={type} id={id} className="input" {...InputOptions}/>
      <label htmlFor={id} className="label text--flicking">{label}</label>
    </div>
  )
}

export default Input