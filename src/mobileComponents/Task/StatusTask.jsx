import { Fragment } from "react";
import { MobileYellowFolder } from "../Svg";
import StatusButton from "../../components/Task/components/StatusButton";
import { Link } from "react-router-dom";

function StatusTask({ name, status, first }) {
    let css = ''
    if (first)
        css = 'border-t'
    return ( 
        <Fragment>
            <Link to={'/mobile/kpi/task/detail'} className={"flex items-center border-b py-4 " + css}>
                <div className="bg-[#B4B1AA]/[0.1] inline-flex p-2 rounded-[50%]"><MobileYellowFolder /></div>
                <div className="ml-3 text-lg">{name}</div>
            </Link>
            <Link to={'/mobile/kpi/task/detail'} className={"border-b py-4 " + css}>
                <StatusButton title={status} mobile={true}/>
            </Link>
        </Fragment>

    )
}

export default StatusTask;