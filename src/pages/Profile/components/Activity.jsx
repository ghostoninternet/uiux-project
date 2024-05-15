
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

export default Activity