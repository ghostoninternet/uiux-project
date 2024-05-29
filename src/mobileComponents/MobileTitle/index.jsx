import { Link } from "react-router-dom";
import { MobileLeftArrow } from "../Svg";

function MobileTitle( { title } ) {
    return ( 
        <div>
            <div className="flex items-center font-bold text-[1.7rem] h-[5rem] border-b-[0.15rem] border-[#F6F6F6]">
                <div className="flex items-center px-6">
                    <Link to={-1}><MobileLeftArrow /></Link>
                    <div className="ml-4">{title}</div>
                </div>
            </div>
        </div>
        
    )
}

export default MobileTitle;