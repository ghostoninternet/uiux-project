
function Apperance() {
  return (
    <div>
         <div className="text-2xl font-[625] mb-5 border-b-2 border-gray-300 w-1/2">
              Select Theme
            </div>
            <div className="w-3/12 min-w-[16rem] flex justify-around mb-8">
              <div className="cursor-pointer w-16 h-16 bg-white border-[2px] rounded-3xl"></div>
              <div className="cursor-pointer w-16 h-16 bg-black border-[2px] border-black rounded-3xl"></div>
              <div className="cursor-pointer w-16 h-16 bg-gray-400 border-[2px] border-gray-400 rounded-3xl"></div>
            </div>
            <div className="text-2xl font-[625] mb-5 border-b-2 border-gray-300 w-1/2">
              Font Size
            </div>
            <div className="w-3/12 min-w-[16rem] mb-10 pl-10 font-semibold">
              <span className="cursor-pointer text-xl mr-14">Aa</span>
              <span className="cursor-pointer text-2xl mr-10">Aa</span>
              <span className="cursor-pointer text-4xl">Aa</span>
            </div>
            <div className="font-[625] text-xl mb-5">
              Are you sure you want to quit ?
            </div>
            <button className="mb-[9.1rem] w-[10rem] border-4 border-[#FABB18] rounded-2xl py-2 text-center font-semibold text-[#FABB18] text-xl uppercase hover:bg-[#FABB18] hover:text-white">
              Log out
            </button>
    </div>
  )
}

export default Apperance