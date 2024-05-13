function NumberPopUpInput({label, value}) {
  return (
    <div className="space-x-4 font-semibold p-3 w-full flex">
    <label htmlFor="" className="w-64 bg-[#FFF8E8] py-3 px-6 rounded-full block text-center">{label}</label>
    <input type="number" className="w-20 ml-32 p-2 rounded-xl bg-slate-100 text-center" defaultValue={value}/>
</div>
  )
}

export default NumberPopUpInput