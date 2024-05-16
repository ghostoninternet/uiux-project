/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import UserIcon from "../Svg/UserIcon"
import MenuBar from "./components/MenuBar"
import { Dashboard, Profile, Setting, KPI, DarkProfile, DarkSetting, DarkKPI, DarkDashboard } from "../Svg/MenuBarIcon"
import { Facebook, Twitter, WhatsApp } from "../Svg/SocialMedia"
import HelpIcon from "../Svg/HelpIcon"
import { Link, useLocation, useNavigate  } from "react-router-dom"
import { Transition } from "@headlessui/react"
import Paint from "../Svg/Paint"
import UserNoCircle from "../Svg/UserNoCircle"
import Config from "../Svg/Config"
import BellBlack from "../Svg/BellBlack"
import TrashCan from "../Svg/TrashCan"
import DownArrow from "../Svg/DownArrow"
import Cancel from "../Svg/Cancel"
import { NotiData } from "../../api/NotiData"

function DefaultLayouts({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuToggleDown, setToggleDown] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false)

  useEffect(() => {
    setCurrentActive(location.pathname.split('/')[1])
  }, [location.pathname])

  const [search, setSearch] = useState('')
  const [currentActive, setCurrentActive] = useState('')
  const labelRef = useRef()

  const sidebarRef = useRef()
  const contentRef = useRef()
  const [smallSidebar, setSmallSidebar] = useState(false)

  const handleOnFocusInput = (event) => {
    if (!labelRef.current.classList.contains('hidden')) {
      labelRef.current.classList.add('hidden')
    }
  }

  const handleOnClickButton = (event) => {
    setSearch('')
    if (labelRef.current.classList.contains('hidden')) {
      labelRef.current.classList.remove('hidden')
    }
  }

  const handleOnClickHamburger = (event) => {
    const divSidebar = sidebarRef.current
    const divContent = contentRef.current
    setSmallSidebar(!smallSidebar)

    if (divSidebar.classList.contains('w-[14.2857%]')) {
      divSidebar.classList.remove('min-w-[260px]', 'w-[14.2857%]')
      divSidebar.classList.add('w-[7%]')
    } else {
      divSidebar.classList.add('min-w-[260px]', 'w-[14.2857%]')
      divSidebar.classList.remove('w-[7%]')
    }

    if (divContent.classList.contains('w-[85.7143%]')) {
      divContent.classList.remove('w-[85.7143%]')
      divContent.classList.add('w-[93%]')
    } else {
      divContent.classList.add('w-[85.7143%]')
      divContent.classList.remove('w-[93%]')
    }
  }
  
  const disappearUserToggleDown = () => {
      if(menuToggleDown === true) {
        setToggleDown(false)
      }
      if(notificationToggle === true) {
        setNotificationToggle(false)
      }
  }

  return (
    <div className="h-screen w-full overflow-hidden min-w-[80.313rem]" onClick={() => disappearUserToggleDown()}>
      <div className="flex flex-row justify-center align-middle w-full min-h-[114px] gap-24">
        <div className="flex flex-row ml-[2rem] mt-[1rem] justify-start gap-14 align-middle w-1/5">
          <div className="my-auto">
            <Link to={"/"} onClick={() => setCurrentActive('')}>
              <svg className="w-[120px]" viewBox="0 0 227 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M87.1091 31.7069C68.9119 49.1168 54.0439 63.6444 54.0439 63.9326C54.0439 64.2209 66.6771 76.5001 82.0923 91.3159L110.141 118.18H121.999C133.309 118.18 133.811 118.123 132.853 117.143C132.306 116.624 119.627 104.46 104.713 90.2206C89.7999 75.9236 77.6228 64.1056 77.6684 63.875C77.7596 63.4714 78.0333 63.1832 114.473 28.3056C129.889 13.5474 142.795 1.15292 143.206 0.749374C143.753 0.172882 141.427 0.0575867 132.032 -6.10352e-05H120.174L87.1091 31.7069Z" fill="#FABB18" />
                <path d="M147.31 8.24364C142.932 12.452 130.846 23.9818 120.539 33.8974C110.186 43.813 101.43 52.0568 101.065 52.2298C100.7 52.4027 99.6509 51.8839 98.7843 51.0192L97.1881 49.4626L91.5328 54.8816C88.4315 57.8217 85.8775 60.4736 85.8319 60.7042C85.7407 60.9924 89.07 64.4514 93.2203 68.3715L100.745 75.6353L120.721 56.4958L140.697 37.3564L140.925 77.5953L141.153 117.892L148.359 118.065L155.52 118.238V59.3783C155.52 27.0372 155.474 0.576324 155.428 0.576324C155.337 0.576324 151.689 4.03526 147.31 8.24364Z" fill="#FABB18" />
                <path d="M68.4102 33.4364C68.4102 39.4319 68.547 44.3897 68.6838 44.3897C69.0943 44.3897 80.268 33.84 80.268 33.4364C80.268 33.0329 69.0943 22.4831 68.6838 22.4831C68.547 22.4831 68.4102 27.3833 68.4102 33.4364Z" fill="#FABB18" />
                <path d="M68.4102 94.8907C68.4102 101.117 68.5926 106.075 68.775 105.959C69.8696 105.44 80.6329 94.833 80.4504 94.4871C80.0856 93.68 69.3679 83.5915 68.9118 83.5915C68.547 83.5915 68.4102 87.281 68.4102 94.8907Z" fill="#FABB18" />
                <path d="M28.8828 153H23.8379V127.793H28.8828V140.396L38.2695 127.793H44L36.0371 138.428L44 153H38.2695L32.7324 142.805L28.8828 147.955V153ZM51.3828 132.838V142.928H56.4277C57.1191 142.928 57.7695 142.799 58.3789 142.541C58.9883 142.271 59.5215 141.908 59.9785 141.451C60.4355 140.994 60.793 140.461 61.0508 139.852C61.3203 139.23 61.4551 138.574 61.4551 137.883C61.4551 137.191 61.3203 136.541 61.0508 135.932C60.793 135.311 60.4355 134.771 59.9785 134.314C59.5215 133.857 58.9883 133.5 58.3789 133.242C57.7695 132.973 57.1191 132.838 56.4277 132.838H51.3828ZM51.3828 153H46.3379V127.793H56.4277C57.3535 127.793 58.2441 127.916 59.0996 128.162C59.9551 128.396 60.752 128.736 61.4902 129.182C62.2402 129.615 62.9199 130.143 63.5293 130.764C64.1504 131.373 64.6777 132.053 65.1113 132.803C65.5566 133.553 65.8965 134.355 66.1309 135.211C66.377 136.066 66.5 136.957 66.5 137.883C66.5 139.266 66.2363 140.572 65.709 141.803C65.1816 143.021 64.4609 144.088 63.5469 145.002C62.6328 145.916 61.5605 146.637 60.3301 147.164C59.1113 147.691 57.8105 147.955 56.4277 147.955H51.3828V153ZM74.5156 153H69.4707V127.793H74.5156V153ZM112.73 153H107.949V141.047C107.949 140.719 107.885 140.408 107.756 140.115C107.639 139.822 107.469 139.564 107.246 139.342C107.023 139.119 106.766 138.949 106.473 138.832C106.18 138.703 105.869 138.639 105.541 138.639C105.213 138.639 104.902 138.703 104.609 138.832C104.328 138.949 104.076 139.119 103.854 139.342C103.643 139.564 103.473 139.822 103.344 140.115C103.227 140.408 103.168 140.719 103.168 141.047V153H98.3691V141.047C98.3691 140.719 98.3047 140.408 98.1758 140.115C98.0586 139.822 97.8887 139.564 97.666 139.342C97.4434 139.119 97.1855 138.949 96.8926 138.832C96.5996 138.703 96.2891 138.639 95.9609 138.639C95.6328 138.639 95.3223 138.703 95.0293 138.832C94.748 138.949 94.4961 139.119 94.2734 139.342C94.0625 139.564 93.8926 139.822 93.7637 140.115C93.6465 140.408 93.5879 140.719 93.5879 141.047V153H88.7891V134.174H89.9492L91.25 135.615C91.918 135.053 92.6504 134.619 93.4473 134.314C94.2559 133.998 95.0938 133.84 95.9609 133.84C96.8398 133.84 97.6953 134.004 98.5273 134.332C99.3711 134.66 100.109 135.229 100.742 136.037C101.035 135.639 101.369 135.299 101.744 135.018C102.119 134.736 102.512 134.508 102.922 134.332C103.344 134.156 103.777 134.033 104.223 133.963C104.668 133.881 105.107 133.84 105.541 133.84C106.537 133.84 107.469 134.027 108.336 134.402C109.215 134.777 109.977 135.293 110.621 135.949C111.277 136.594 111.793 137.355 112.168 138.234C112.543 139.113 112.73 140.051 112.73 141.047V153ZM134.475 153H133.314L131.451 150.416C130.994 150.826 130.508 151.213 129.992 151.576C129.488 151.928 128.955 152.238 128.393 152.508C127.83 152.766 127.25 152.971 126.652 153.123C126.066 153.275 125.469 153.352 124.859 153.352C123.535 153.352 122.287 153.129 121.115 152.684C119.955 152.238 118.936 151.594 118.057 150.75C117.189 149.895 116.504 148.852 116 147.621C115.496 146.391 115.244 144.99 115.244 143.42C115.244 141.955 115.496 140.613 116 139.395C116.504 138.164 117.189 137.109 118.057 136.23C118.936 135.352 119.955 134.672 121.115 134.191C122.287 133.699 123.535 133.453 124.859 133.453C125.469 133.453 126.072 133.529 126.67 133.682C127.268 133.834 127.848 134.045 128.41 134.314C128.973 134.584 129.506 134.9 130.01 135.264C130.525 135.627 131.006 136.02 131.451 136.441L133.314 134.209H134.475V153ZM129.641 143.42C129.641 142.764 129.512 142.131 129.254 141.521C129.008 140.9 128.668 140.355 128.234 139.887C127.801 139.406 127.291 139.025 126.705 138.744C126.131 138.451 125.516 138.305 124.859 138.305C124.203 138.305 123.582 138.416 122.996 138.639C122.422 138.861 121.918 139.189 121.484 139.623C121.062 140.057 120.729 140.596 120.482 141.24C120.236 141.873 120.113 142.6 120.113 143.42C120.113 144.24 120.236 144.973 120.482 145.617C120.729 146.25 121.062 146.783 121.484 147.217C121.918 147.65 122.422 147.979 122.996 148.201C123.582 148.424 124.203 148.535 124.859 148.535C125.516 148.535 126.131 148.395 126.705 148.113C127.291 147.82 127.801 147.439 128.234 146.971C128.668 146.49 129.008 145.945 129.254 145.336C129.512 144.715 129.641 144.076 129.641 143.42ZM148.484 153H137.516V148.219H148.484C148.812 148.219 149.094 148.102 149.328 147.867C149.562 147.633 149.68 147.352 149.68 147.023C149.68 146.684 149.562 146.461 149.328 146.355C149.094 146.25 148.812 146.197 148.484 146.197H143.492C142.66 146.197 141.881 146.039 141.154 145.723C140.428 145.406 139.795 144.979 139.256 144.439C138.717 143.889 138.289 143.25 137.973 142.523C137.668 141.797 137.516 141.018 137.516 140.186C137.516 139.354 137.668 138.574 137.973 137.848C138.289 137.121 138.717 136.488 139.256 135.949C139.795 135.41 140.428 134.988 141.154 134.684C141.881 134.367 142.66 134.209 143.492 134.209H153.213V138.99H143.492C143.164 138.99 142.883 139.107 142.648 139.342C142.414 139.576 142.297 139.857 142.297 140.186C142.297 140.525 142.414 140.818 142.648 141.064C142.883 141.299 143.164 141.416 143.492 141.416H148.484C149.305 141.416 150.078 141.557 150.805 141.838C151.531 142.107 152.164 142.488 152.703 142.98C153.242 143.473 153.67 144.064 153.986 144.756C154.303 145.447 154.461 146.203 154.461 147.023C154.461 147.855 154.303 148.635 153.986 149.361C153.67 150.076 153.242 150.709 152.703 151.26C152.164 151.799 151.531 152.227 150.805 152.543C150.078 152.848 149.305 153 148.484 153ZM166.467 153C165.307 153 164.217 152.783 163.197 152.35C162.178 151.904 161.281 151.301 160.508 150.539C159.746 149.766 159.143 148.869 158.697 147.85C158.264 146.83 158.047 145.74 158.047 144.58V138.99H155.709V134.209H158.047V126.686H162.828V134.209H170.105V138.99H162.828V144.58C162.828 145.084 162.922 145.559 163.109 146.004C163.297 146.438 163.555 146.818 163.883 147.146C164.211 147.475 164.598 147.738 165.043 147.938C165.488 148.125 165.963 148.219 166.467 148.219H170.105V153H166.467ZM180.301 148.395C180.488 148.453 180.676 148.494 180.863 148.518C181.051 148.529 181.238 148.535 181.426 148.535C181.895 148.535 182.346 148.471 182.779 148.342C183.213 148.213 183.617 148.031 183.992 147.797C184.379 147.551 184.719 147.258 185.012 146.918C185.316 146.566 185.562 146.18 185.75 145.758L189.266 149.291C188.82 149.924 188.305 150.492 187.719 150.996C187.145 151.5 186.518 151.928 185.838 152.279C185.17 152.631 184.461 152.895 183.711 153.07C182.973 153.258 182.211 153.352 181.426 153.352C180.102 153.352 178.854 153.105 177.682 152.613C176.521 152.121 175.502 151.436 174.623 150.557C173.756 149.678 173.07 148.635 172.566 147.428C172.062 146.209 171.811 144.873 171.811 143.42C171.811 141.932 172.062 140.572 172.566 139.342C173.07 138.111 173.756 137.062 174.623 136.195C175.502 135.328 176.521 134.654 177.682 134.174C178.854 133.693 180.102 133.453 181.426 133.453C182.211 133.453 182.979 133.547 183.729 133.734C184.479 133.922 185.188 134.191 185.855 134.543C186.535 134.895 187.168 135.328 187.754 135.844C188.34 136.348 188.855 136.916 189.301 137.549L180.301 148.395ZM182.762 138.498C182.539 138.416 182.316 138.363 182.094 138.34C181.883 138.316 181.66 138.305 181.426 138.305C180.77 138.305 180.148 138.428 179.562 138.674C178.988 138.908 178.484 139.248 178.051 139.693C177.629 140.139 177.295 140.678 177.049 141.311C176.803 141.932 176.68 142.635 176.68 143.42C176.68 143.596 176.686 143.795 176.697 144.018C176.721 144.24 176.75 144.469 176.785 144.703C176.832 144.926 176.885 145.143 176.943 145.354C177.002 145.564 177.078 145.752 177.172 145.916L182.762 138.498ZM196.525 153H191.727V134.174H192.887L194.469 136.406C195.242 135.703 196.121 135.164 197.105 134.789C198.09 134.402 199.109 134.209 200.164 134.209H204.4V138.99H200.164C199.66 138.99 199.186 139.084 198.74 139.271C198.295 139.459 197.908 139.717 197.58 140.045C197.252 140.373 196.994 140.76 196.807 141.205C196.619 141.65 196.525 142.125 196.525 142.629V153Z" fill="#FABB18" />
              </svg>
            </Link>
          </div>
          <div className="mt-3">
            <button onClick={handleOnClickHamburger}>
              <div className="flex flex-col justify-between w-[40px] h-[25px] rigin-center overflow-hidden">
                <div className="bg-black h-[3px] w-8"></div>
                <div className="bg-black h-[3px] w-8"></div>
                <div className="bg-black h-[3px] w-8"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-start gap-20 align-middle w-3/5 my-auto">
          <div className="w-11/12 relative">
            <label ref={labelRef} htmlFor="search-bar" className="absolute left-1/2 -translate-x-1/2 top-[12px] opacity-50 flex">
            <svg fill="#000000" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1">
                <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd"/>
            </svg>
              Search
            </label>
            <input onFocus={handleOnFocusInput} value={search} onChange={(e) => setSearch(e.target.value)} id="search-bar" type="text"
              className="bg-gray-100 border-transparent border-[1px] px-5 py-3 rounded-3xl w-full outline-none" />
            <button onClick={handleOnClickButton} className="hover:bg-slate-200 px-1 rounded-xl absolute top-[12px] right-[18px]">
              <Cancel />
            </button>
          </div>
          <div className="cursor-pointer hover:bg-slate-100 p-2 rounded-md" onClick={() => setNotificationToggle(!notificationToggle)}>
            <BellBlack size={35} />
          </div>
        </div>

        <div className="flex flex-row justify-end align-middle w-1/5 my-auto cursor-pointer hover:bg-slate-100 rounded-lg mr-5" onClick={() => setToggleDown(!menuToggleDown)}>
          <div className="text-xl my-auto flex font-semibold">
            Username <div className="mt-2 ml-2"><DownArrow /></div>
          </div>
          <div className="my-auto">
            <UserIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-[87.5%]">
        <div ref={sidebarRef} className="w-[14.2857%] min-w-[260px] flex flex-col justify-between">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full px-6 pt-12 space-y-8">
              <div className="w-full">
                <MenuBar smallSidebar={smallSidebar} link={"/"} svgIcon={<Dashboard />} darkSvgIcon={<DarkDashboard />} menuTitle={"Dashboard"} currentActive={currentActive} setCurrentActive={setCurrentActive} />
              </div>
              <div className="w-full">
                <MenuBar smallSidebar={smallSidebar} link={"/kpi"} svgIcon={<KPI />} darkSvgIcon={<DarkKPI />} menuTitle={"View KPI"} currentActive={currentActive} setCurrentActive={setCurrentActive} />
              </div>
              <div className="w-full">
                <MenuBar smallSidebar={smallSidebar} link={"/profile"} svgIcon={<Profile />} darkSvgIcon={<DarkProfile />} menuTitle={"Profile"} currentActive={currentActive} setCurrentActive={setCurrentActive} />
              </div>
              <div className="w-full">
                <MenuBar smallSidebar={smallSidebar} link={"/setting"} svgIcon={<Setting />} darkSvgIcon={<DarkSetting />} menuTitle={"Setting"} currentActive={currentActive} setCurrentActive={setCurrentActive} />
              </div>
            </div>
            {
              !smallSidebar &&
              (<div className="w-full px-[2.4rem] flex justify-between gap-10">
               <div className="cursor-pointer hover:bg-slate-200"><Facebook /></div>
                <div className="cursor-pointer hover:bg-slate-200"><WhatsApp /></div>
                <div className="cursor-pointer hover:bg-slate-200"><Twitter /></div>
              </div>)
            }
            {
              smallSidebar &&
              (
                <div className="w-full flex flex-col gap-10 px-[3rem]">
                  <div className="cursor-pointer hover:bg-slate-200"><Facebook /></div>
                  <div className="cursor-pointer hover:bg-slate-200"><WhatsApp /></div>
                  <div className="cursor-pointer hover:bg-slate-200"><Twitter /></div>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="h-[4px] w-full bg-black"></div>
            <div className="cursor-pointer flex gap-3 px-9 mt-3 mb-5">
              <div className="">
                <HelpIcon />
              </div>
              {
                !smallSidebar &&
                (
                  <div className="text-xl my-auto font-semibold">
                    Help
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div ref={contentRef} className="w-[85.7143%] overflow-auto scrollbar bg-gray-100 rounded-tl-3xl">
            {children}
        </div>
      </div>

      <Transition
        show={menuToggleDown}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed bg-white top-[10%] right-[3%] h-auto w-1/5 shadow-xl rounded-xl py-2">
          <div className="flex border-b-2 border-gray-200 p-2">
          <div className="relative">
            <UserIcon />
            <div className="h-4 w-4 rounded-full bg-green-400 absolute left-[67%] bottom-[60%] border-2 border-white"></div>
          </div>
           <div className="">
              <h1 className="font-bold text-xl">Username</h1>
              <p>Online</p>
           </div>
          </div>
          <ul className="px-4 font-semibold">
            <li className="p-2 flex hover:bg-slate-100 rounded-e-md cursor-pointer" onClick={(e) => navigate('/profile')}>
              <div className="mr-3"><UserNoCircle /></div>Profile
            </li>
            <li className="p-2 flex hover:bg-slate-100 rounded-e-md cursor-pointer" onClick={(e) => navigate('/setting')}><div className="mr-3"><Paint /></div>Theme</li>
            <li className="p-2 flex hover:bg-slate-100 rounded-e-md cursor-pointer" onClick={(e) => navigate('/setting')}><div className="mr-3"><Config /></div>Setting</li>
            <li className="p-2 border-b-2 border-gray-200 flex hover:bg-slate-100 rounded-e-md cursor-pointer" onClick={(e) => navigate('/setting')}><div className="mr-3"><BellBlack size={25} /></div>Notification setting</li>
            <li className="p-2 flex hover:bg-slate-100 rounded-e-md cursor-pointer"><div className="mr-3"><TrashCan  /></div>Trash</li>
            <li className="p-2 hover:bg-slate-100 rounded-e-md cursor-pointer"><Link to="/sign-in" className="flex">
            <div className="mr-3 cursor-pointer"><svg fill="#000000" width="25" height="25" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><path d="M25.229,14.5l-16.003,0c-0.828,-0 -1.5,0.672 -1.5,1.5c-0,0.828 0.672,1.5 1.5,1.5l16.038,0l-3.114,3.114c-0.585,0.585 -0.585,1.536 0,2.121c0.586,0.586 1.536,0.586 2.122,0c-0,0 2.567,-2.567 4.242,-4.242c1.367,-1.367 1.367,-3.583 0,-4.95l-4.242,-4.243c-0.586,-0.585 -1.536,-0.585 -2.122,0c-0.585,0.586 -0.585,1.536 0,2.122l3.079,3.078Z"/><path d="M20,24l-0,-4.5l-10.774,0c-1.932,-0 -3.5,-1.568 -3.5,-3.5c-0,-1.932 1.568,-3.5 3.5,-3.5l10.774,0l-0,-4.5c-0,-2.761 -2.239,-5 -5,-5c-2.166,-0 -4.834,0 -7,-0c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536c-0,4.439 -0,11.561 0,16c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c2.166,0 4.834,0 7,0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536Z"/></svg></div>
              Log out</Link></li>
          </ul>
        </div>
      </Transition>

      
      <Transition
        show={notificationToggle}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed bg-white top-[10%] right-[22%] h-auto w-[23%] shadow-xl rounded-xl py-2 flex flex-col">
              <h1 className="py-2 font-semibold text-lg px-5 text-end border-b-[1px] border-slate-400 text-yellow-400">Notifications</h1>
              <ul className="px-5 h-96 overflow-y-scroll">
              {NotiData.map((noti,index) => <li key={index}>
                  <div className="py-3">
                    <h1 className="font-medium text-yellow-500 mb-1">{noti.message}</h1>
                    <div className="flex px-3">
                      <div>
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      </div>
                    <p className="text-gray-500 ml-2">{noti.time}</p>
                    </div>
                  </div>

              </li>)}
              </ul>
        </div>
      </Transition>






    </div>
  )
}

export default DefaultLayouts
