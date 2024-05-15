import Activity from "./Activity"

function ProfileActivityComponent() {
  const activities = [
    {
      activityTime: "5 minutes ago",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "30 minutes ago",
      activityType: "Finish task",
      activityTitle: "Đấm chết cm thằng Hà",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "59 minutes ago",
      activityType: "Create new KPI",
      activityTitle: "Chăm sóc sức khỏe",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Đi tập gym",
      activityDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."
    }
  ]
  return (
    <div className="w-[90%] mx-auto bg-white rounded-2xl shadow-2xl">
      <div className="w-[90%] mx-auto">
        <div className="font-bold text-3xl mt-5">
          Activities
        </div>
        <div className="mt-5 ml-4 mb-10 scrollbars-hidden overflow-auto max-h-[20rem]">
          <ol className="relative border-s-4 ml-4 border-[#FABB18]">
            { activities.map((activity, index) => <Activity key={index} activityTime={activity.activityTime} activityType={activity.activityType} activityTitle={activity.activityTitle} activityDescription={activity.activityDescription} />)}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ProfileActivityComponent