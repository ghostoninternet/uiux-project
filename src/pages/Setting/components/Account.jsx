import {Facebook, Apple, Google} from '../../../components/Svg/SignLogo'

function Account() {
  return (
    <div className='w-full'>
        <div className="mb-7 pr-20">
            <h1 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2 w-1/2">Change username</h1>
            <p className="pt-2">Changing your username can have unintended side effects.</p>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white">Change username</button>
        </div>

        <div className="mb-7 pr-20">
            <h1 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2 w-1/2">Link account</h1>
            <p className="pt-2">Connect to another platform to get the best experience.</p>
            <div className="flex gap-5">
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3">
                <Google />Google account
            </button>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3">
                <Facebook color="#FABB18"/>Fackebook account
            </button>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3">
                <Apple color="#FABB18" />Apple account
            </button>
            </div>
        </div>

        <div className="mb-7 pr-20">
            <h1 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2 w-1/2">Export account data</h1>
            <p className="pt-2">Export all repositories and profile metadata for @tunglm271. Exports will be available for 7 days.</p>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white">Start export</button>
        </div>

        <div className="mb-7 pr-20">
            <h1 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2 text-red-600 w-1/2">Delete account</h1>
            <p className="pt-2">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold bg-[#FABB18] ">Delete account</button>
        </div>

    </div>
  )
}

export default Account