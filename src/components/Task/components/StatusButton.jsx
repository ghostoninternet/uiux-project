import { PlaySvg } from "../components/PlaySvg";
import CheckSvg from "./CheckSvg";
import WarningSvg from "./WarningSvg";

function StatusButton({ title }) {
    let color = '#4196D1'
    let Comp = PlaySvg
    let css = 'bg-white rounded-[50%]'
    switch (title) {
        case 'Late':
            Comp = WarningSvg
            css = 'bg-[#FE3507]'
            color = '#FE3507'
            break
        case 'Done':
            Comp = CheckSvg
            css = 'bg-[#5ABE09]'
            color = '#5ABE09'
            break
        default:
            break;
    }
    return ( 
        <div className={`h-10 w-[8rem] items-center flex rounded-lg`} style={{backgroundColor: `${color}`}}>
            <div className={"ml-2 w-5 h-5 flex justify-center items-center " + css}>
                <Comp />
            </div>
            <span className="ml-2 font-semibold text-white mr-2">{title}</span>
        </div>
    )
}

export default StatusButton;