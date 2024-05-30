import { PlaySvg } from "../components/PlaySvg";
import CheckSvg from "./CheckSvg";
import WarningSvg from "./WarningSvg";

function StatusButton({ title, mobile }) {
    let color = '#5299C0'
    let Comp = PlaySvg
    let css = 'bg-white rounded-[50%]'
    switch (title) {
        case 'Late':
            Comp = WarningSvg
            css = 'bg-[#FC720F]'
            color = '#FC720F'
            break
        case 'Done':
            Comp = CheckSvg
            css = 'bg-[#77BD0C]'
            color = '#77BD0C'
            break
        default:
            break;
    }
    let buttonCss = 'h-10 w-[8rem] items-center flex rounded-lg'
    let textCss = 'ml-2 font-semibold text-white mr-2'
    let iconCss = 'ml-2'
    if (mobile) {
        buttonCss = 'h-10 w-[9rem] items-center flex rounded-lg'
        textCss = 'ml-4 font-semibold text-white mr-2'
        iconCss = 'ml-3'
    }
    return ( 
        <div className={buttonCss} style={{backgroundColor: `${color}`}}>
            <div className={"w-5 h-5 flex justify-center items-center " + css + " " + iconCss}>
                <Comp />
            </div>
            <span className={textCss}>{title}</span>
        </div>
    )
}

export default StatusButton;