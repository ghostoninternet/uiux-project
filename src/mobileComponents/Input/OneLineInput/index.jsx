
function OneLineInput( { title } ) {
    return ( 
        <label htmlFor="">
            <input className="shadow-inner focus:outline-none placeholder:italic w-[100%] bg-[#F6F6F6] pl-4 py-2 rounded-xl" type="text" placeholder={title}/>
        </label>
    )
}

export default OneLineInput;