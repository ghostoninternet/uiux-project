function PopUpInput({label, id, ...inputProps}) {
  return (
    <div className="flex">
        <label htmlFor={id} className="font-bold text-xl block w-36">{label}</label> 
        <input {...inputProps} className="placeholder:text-gray-400 font-semibold bg-slate-100 py-1 px-3 w-1/2 placeholder:italic rounded-sm"/>
    </div>
  )
}

export default PopUpInput