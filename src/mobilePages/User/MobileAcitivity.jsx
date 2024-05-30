function Activity({ activityTime, activityType, activityTitle, activityDescription }) {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-white rounded-full -start-1.5 border-[#FABB18] border-[5px] p-2 left-[-15px]"></div>
      <div className="ml-8">
        <time className="mb-1 font-normal leading-none text-lg text-gray-400">{activityTime}</time>
        <div className="text-lg font-bold mt-1">
          <span className="text-[#FABB18] mr-1">{activityType}: </span>
          <span>{activityTitle}</span>
        </div>
        <p className="mt-1 italic text-gray-500 text-lg">{activityDescription}</p>
      </div>
    </li>
  )
}


function MobileAcitivity( { hiew } ) {
  let css = 'mt-5 ml-4 mb-7 scrollbars-hidden overflow-auto max-h-[40rem]'
  let css1 = 'fixed'
  if (hiew) {
    css = 'mt-5 ml-4 mb-7 max-h-[40rem]'
  }
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
    <div className=" mx-auto bg-white rounded-2xl">
      <div className="w-full pr-5 mb-3">
        <div className={"font-bold text-2xl mt-5 "}>
          Activities
        </div>
        <div className={css}>
          <ol className="relative border-s-4 ml-4 border-[#FABB18]">
            { activities.map((activity, index) => <Activity key={index} activityTime={activity.activityTime} activityType={activity.activityType} activityTitle={activity.activityTitle} activityDescription={activity.activityDescription} />)}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default MobileAcitivity