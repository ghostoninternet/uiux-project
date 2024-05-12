import FolderSVG from "./FolderSVG";
import '../Task/index.css'

function Task({title, Taskcompleted, weight}) {
    return ( 
        <div className="inline-block mt-2">
            <div className="inline-flex items-center pr-8">
                <div className="inline-flex p-2 bg-[#F8F8F7] rounded-[50%] ml-8">
                    <FolderSVG />
                </div>
                <span className="ml-4 text-xl w-60 task-title">{title}</span>
                <div className="flex ml-10 w-[28rem] rounded" style={{border: `0.1rem solid #DFDFDF`}}>
                    <div className="rounded" style={{border: `0.1rem solid #FABB18`, width: `${Taskcompleted*28/100}rem`}}></div>
                </div>

                <div className="ml-10 w-20 text-center py-1 bg-[#FFF8E8] rounded-lg text-xl">{weight}</div>
            </div>
            <div className="mt-2" style={{border: `0.01rem solid #DFDFDF`}}></div>
        </div>
    )
}

export default Task;