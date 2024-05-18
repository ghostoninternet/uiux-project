import Switch from "./Switch"

Switch

function Notification() {
  return (
    <div className="flex flex-col gap-8">
      <Switch label={"All notifications"}/>
      <Switch label={"Remind notifications"}/>
      <Switch label={"Upcoming task"}/>
      <Switch label={"New update version"}/>
      <div>
        <h1 className="text-2xl font-[625] mb-4 flex flex-col gap-4">Customize notifications</h1>

        <div>
            <h2 className="text-xl font-semibold">Frequency</h2>
            Setting the number of notifications sent in a period of time.

        </div>

      </div>
    </div>
  )
}

export default Notification