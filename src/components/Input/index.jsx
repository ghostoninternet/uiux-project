function Input({ label, type }) {
  return (
    <div className="input-box">
    <input type={type} className="input relative w-full px-4.5 py-4.5 border border-gray-400 rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id={label}/>
    <label className="absolute top-2.5 left-4 text-gray-400 text-sm transition-all duration-500 ease-in-out transform focus:top-1 focus:left-1 focus:text-indigo-500">username</label>
  </div>
  )
}

export default Input