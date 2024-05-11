import { Link } from 'react-router-dom'
import bgImage from '../../assets/Untitled.png'
import Input from '../../components/Input'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import Logo from '../../components/Svg/Logo'
import {Facebook, Apple, Google} from '../../components/Svg/SignLogo'

function SignIn() {
  return (
    <>
      <div className="flex flex-row h-screen w-screen">
        <div className='w-1/4 flex justify-center align-middle'>
          <div className="h-full flex flex-col justify-center">
            <div className="mb-8">
              <Logo />
            </div>
            <div>
              <form className=''>
                <Input label={"username"} type={"text"} id={'1'}/>
                <Input label={"password"} type={"password"} id={'2'} />
                <div className='flex justify-between'>
                  <div className=' bg-blue-500 w-20 py-1 rounded-md flex justify-center'>
                    <Facebook />
                  </div>
                  <div className=' bg-black w-20 py-1 rounded-md flex justify-center'>
                    <Apple />
                  </div>
                  <div className='border-black border-[1px] w-20 py-1 rounded-md flex justify-center'>
                    <Google />
                  </div>
                </div>
                <div className='mt-2 align-middle'>
                  <input id='checkbox' type="checkbox" className='w-4 h-4 mr-5'/>
                  <label htmlFor="checkbox">stay signed in</label>
                </div>
                <div className='flex justify-center mt-36'>
                  <SubmitButton />
                </div>
                
              </form>
            </div>
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