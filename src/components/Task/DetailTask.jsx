import YellowFolder from "../Svg/YellowFolder";
import MenuVertical from "./components/MenuVertical";
import StatusButton from "./components/StatusButton";

function DetailTask( { data } ) {
    return ( 
        <div className="w-full inline-block pt-2 cursor-pointer hover:bg-slate-100">
            <div className="w-full flex justify-evenly items-center pr-8">
                <div className="inline-flex p-2 pl-[0.25rem] bg-[#F8F8F7] rounded-[50%] ml-8">
                    <YellowFolder />
                </div>
                <span className="ml-4 text-xl w-60 task-title">{data.title}</span>
                <div className="flex ml-[4rem] w-[12rem] rounded" style={{border: `0.1rem solid #DFDFDF`}}>
                    <div className="rounded" style={{border: `0.1rem solid #FABB18`, width: `${data.Taskcompleted*12/100}rem`}}></div>
                </div>

                <div className="ml-[5.5rem] w-[6.5rem] text-center py-1 bg-[#FFF8E8] rounded-lg text-xl">{data.weight}</div>

                <div className="ml-[6rem]">
                    <StatusButton title={data.status}/>
                </div>

                <div className="ml-[2.5rem]">
                    <MenuVertical />
                </div>
            </div>
            <div className="mt-2" style={{border: `0.01rem solid #DFDFDF`}}></div>
        </div>
    )
}

export default DetailTask;