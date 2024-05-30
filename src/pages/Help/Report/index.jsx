import Input from "../../../components/Input"

Input

function Report() {
    

  return (
    <div className="pt-5 pb-14 px-10 flex gap-10 flex-col">
        <div>
            <h1 className="text-3xl">Help &gt; Report</h1>
            <div className="w-4/5 mx-auto mt-10 flex flex-col gap-12">
                <h1 className="text-center font-bold text-3xl">What can we help you with?</h1>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex gap-7">
                    <div className="p-5 w-1/2 flex flex-col">
                        <h1 className="text-lg font-bold mb-3">Describe your issue</h1>
                        <p className="text-sm text-gray-300 font-semibold mb-7">Please describe the issue you are experiencing in as much detail as possible. This will help us understand what’s going on.</p>
                        <textarea placeholder="Add decripstion*" className="p-3 bg-[#FFF8E8] resize-none w-full focus:outline-0 font-medium min-h-36 rounded-xl placeholder:text-gray-600"></textarea>
                    </div>

                    <form className="p-5 w-1/2 flex flex-col gap-7">
                    <h1 className="text-lg font-bold">Your contact</h1>
                    
                        <Input label={'Your email*'} width="90%" type={'email'}/>
                        <Input label={'Your phone number*'} width="90%"/>
                        <Input label={'Type of issue*'} width="90%"/>
                        <button className="mt-5 py-2 bg-[#FABB18] rounded-lg w-1/4 font-bold ml-auto hover:bg-yellow-500">Submit</button>
                    </form>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Report