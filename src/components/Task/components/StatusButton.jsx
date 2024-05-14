import { PlaySvg } from "../components/PlaySvg";
import CheckSvg from "./CheckSvg";
import WarningSvg from "./WarningSvg";

function StatusButton({ title }) {
    let color = '#188EFA'
    let Comp = PlaySvg
    let css = 'rounded-[50%]'
    switch (title) {
        case 'Late':
            Comp = WarningSvg
            css = 'bg-[#FF0000]'
            color = '#FF0000'
            break
        case 'Done':
            Comp = CheckSvg
            css = 'bg-[#36BF06]'
            color = '#36BF06'
        default:
            break;
    }
    return ( 
        <div className={`h-10 w-[8rem] items-center flex rounded-lg`} style={{backgroundColor: `${color}`}}>
            <div className={"ml-2 w-5 h-5 flex justify-center items-center bg-white " + css}>
                <Comp />
            </div>
            <span className="ml-2 font-semibold text-white mr-2">{title}</span>
        </div>
    )
}

export default StatusButton;