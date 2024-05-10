function Input({ label, type }) {
  return (
    <div className="bg relative mx-auto w-200 border-2 py-4">
      <input type="text" id="input" required="" className="focus:outline-none focus:ring-black focus:ring-opacity-50 peer rounded-lg px-3 text-gray-700" />
      <label htmlFor="input" className="absolute top-0 left-0 text-gray-400 peer-focus:top-[-20px] peer-focus:text-gray-700 peer-focus:font-medium transition duration-300 ease-in-out">Enter Text</label>
    </div>
  )
}

export default Input