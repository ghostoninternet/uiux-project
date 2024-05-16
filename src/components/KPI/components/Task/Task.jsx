import FolderSVG from "./FolderSVG";
import '../Task/index.css'

function Task({ event, taskClick, setTaskDetail }) {
    const handleOnClick  = () => {
        taskClick(true)
        setTaskDetail(event)
    }

    return ( 
        <div className="inline-block pt-2 cursor-pointer hover:bg-slate-100" onClick={() => handleOnClick()}>
            <div className="inline-flex items-center pr-8">
                <div className="inline-flex p-2 bg-[#F8F8F7] rounded-[50%] ml-8">
                    <FolderSVG />
                </div>
                <span className="ml-4 w-52 task-title">{event.title}</span>
                <div className="flex ml-5 w-[28rem] rounded bg-slate-300">
                    <div className="rounded" style={{border: `0.1rem solid #FABB18`, width: `${event.Taskcompleted*28/100}rem`}}></div>
                </div>

                <div className="ml-10 w-20 text-center py-1 bg-[#FFF8E8] rounded-lg text-xl">{event.weight}</div>
            </div>
            <div className="mt-2" style={{border: `0.01rem solid #DFDFDF`}}></div>
        </div>
    )
}

export default Task;