import { Link } from "react-router-dom"
import HelpDropDown from "../../components/DropDownItem/HelpDropDown"

function Help() {
    

  return (
    <div className="pt-5 pb-14 px-10 flex gap-10 flex-col">
        <div>
            <h1 className="text-3xl">Help &gt; Home</h1>
            <div className="w-3/4 mx-auto mt-10 flex flex-col gap-12">
                <h1 className="text-center font-bold text-3xl">Frequently Asked Questions</h1>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <h1 className="py-7 px-10 text-yellow-400 font-bold text-xl border-b-2 border-gray-300">Using KPImaster</h1>
                    <HelpDropDown title={'How to create KPI?'}>
                            <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                            <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to create Task?'}>
                        <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to caculate KPI process?'}>
                        <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <h1 className="py-7 px-10 text-yellow-400 font-bold text-xl border-b-2 border-gray-300">Account Management</h1>
                    <HelpDropDown title={'How to change username and password?'}>
                            <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                            <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to config notification?'}>
                        <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How do I delete my account and access my data?'}>
                        <p className="text-lg w-11/12">Duolingo continuously updates courses to make them better and more effective. As we make improvements, you might notice adjustments to existing content or the introduction of brand new material. When this happens, we may also reposition you within your learning path to better align with the fresh content and structure. Rest assured, this helps ensure that you receive the most up-to-date and impactful learning experience possible!</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                </div>

                <div className="text-center flex flex-col font-semibold text-xl gap-1">
                    <p>Still unsure about something?</p>
                    <p>You have something else to discuss with us?</p>
                    <Link className="rounded-2xl py-2 bg-[#FABB18] w-[30%] mx-auto mt-6 shadow-lg hover:bg-yellow-500" to="/help/report">Send Some Feedback</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help