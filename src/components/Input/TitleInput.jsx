function TitleInput(props) {
  return (
    <input type="text" className="border-0 w-full focus:outline-0 placeholder:text-gray-400 font-semibold text-xl" placeholder={props.placeholder}/>
  )
}

export default TitleInput