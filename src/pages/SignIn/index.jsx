import bgImage from '../../assets/Untitled.png'
import Input from '../../components/Input'
import Logo from '../../components/Svg/Logo'

function SignIn() {
  return (
    <>
      <div className="flex flex-row h-screen w-screen">
        <div className="w-1/4 h-full bg-gray-200 flex flex-col justify-center">
          <div className="">
            <Logo />
          </div>
          <div>
            <form>
              <Input label={"username"} type={"text"} />
            </form>
          </div>
        </div>
        <div className="w-3/4 h-full bg-slate-600">
          <img className="h-full w-full overflow-hidden object-cover" src={bgImage} />
        </div>
      </div>
    </>
    
  )
}

export default SignIn