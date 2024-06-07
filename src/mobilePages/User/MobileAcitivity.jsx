function Activity({ activityTime, activityType, activityTitle, activityDescription }) {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-white rounded-full -start-1.5 border-[#FABB18] border-[4px] p-2 left-[-15px]"></div>
      <div className="ml-5">
        <time className="font-normal leading-none text-lg text-gray-400">{activityTime}</time>
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
      activityTitle: "Student Review 1",
      activityDescription: "Students evaluate the quality for the first time"
    },
    {
      activityTime: "5 minutes ago",
      activityType: "Finish task",
      activityTitle: "Student Review 1",
      activityDescription: "Summary of comments from students for the first time"
    },
    {
      activityTime: "5 minutes ago",
      activityType: "Create new task",
      activityTitle: "Assignment 1",
      activityDescription: "Fill in assignment 1 score number"
    },
    {
      activityTime: "30 minutes ago",
      activityType: "Finish task",
      activityTitle: "Assignment 1",
      activityDescription: "Evaluate the quality of assignment 1"
    },
    {
      activityTime: "59 minutes ago",
      activityType: "Create new KPI",
      activityTitle: "Assignment 2",
      activityDescription: "Evaluate the quality of assignment 2"
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Student Review 2",
      activityDescription: "Summary of comments from students for the second time"
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Project 1",
      activityDescription: "Evaluation of project quality number 1"
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Assignment 3",
      activityDescription: "Evaluate the quality of assignment 2"
    },
    {
      activityTime: "Yesterday",
      activityType: "Create new task",
      activityTitle: "Project 2",
      activityDescription: "Evaluation of project quality number 2"
    }
  ]
  return (
    <div className=" mx-auto bg-white rounded-2xl">
      <div className="w-full pr-5 mb-3">
        <div className={"font-bold text-2xl mt-5 mx-5 "}>
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