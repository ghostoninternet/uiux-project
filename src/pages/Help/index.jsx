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
                            <p className="text-lg w-11/12">To create a KPI, log in to your account. Select the ViewKPI page. Select Create KPI. Enter the KPI name and accompanying parameters or upload a file. Press Create. KPI created successfully.</p>
                            <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to create Task?'}>
                        <p className="text-lg w-11/12"> To create a task, log in to your account. Navigate to the Tasks section. Click on Create Task. Fill in the task details, including name, description, and deadline. Press Create. Task created successfully.</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to caculate KPI process?'}>
                        <p className="text-lg w-11/12">To calculate a KPI process, log in to your account. Go to the ViewKPI page. Select the KPI you want to calculate. Review the data and metrics associated with the KPI. Follow the calculation formula provided in the KPI details. Input necessary values and perform the calculation. Review the calculated KPI results.</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <h1 className="py-7 px-10 text-yellow-400 font-bold text-xl border-b-2 border-gray-300">Account Management</h1>
                    <HelpDropDown title={'How to change username and password?'}>
                            <p className="text-lg w-11/12">To change your username and password, log in to your account. Go to the Account Settings or Profile section. Select Change Username or Change Password. Follow the instructions to enter your new username or password. Confirm the changes. Username or password updated successfully.</p>
                            <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How to config notification?'}>
                        <p className="text-lg w-11/12">To configure notifications, log in to your account. Go to the Account Settings or Notifications section. Select Notification Preferences. Choose the types of notifications you want to receive (e.g., email, SMS, in-app). Save your preferences. Notification settings updated successfully.</p>
                        <button className="font-bold text-yellow-400 text-lg uppercase mt-5">Read me</button>
                    </HelpDropDown>
                    <HelpDropDown title={'How do I delete my account and access my data?'}>
                        <p className="text-lg w-11/12">To delete your account and access your data, log in to your account. Go to the Account Settings section. Select Delete Account. Follow the prompts to confirm account deletion. To access your data before deletion, navigate to the Data Management or Export Data section. Download or export your data as needed. Confirm the deletion of your account. Account deleted and data accessed successfully.</p>
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