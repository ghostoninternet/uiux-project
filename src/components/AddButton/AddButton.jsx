import Plus from "../Svg/Plus";

function AddButton({tittle, onClick}) {
    return ( 
        <div className="flex bg-white rounded-lg h-16 items-center hover:cursor-pointer select-none" onClick={() => onClick()}>
            <div className="w-40 text-center text-lg">{tittle}</div>
            <div className="bg-[#FABB18] mx-4 p-2 rounded-lg">
                <Plus />
            </div>
        </div>
    )
}

export default AddButton;