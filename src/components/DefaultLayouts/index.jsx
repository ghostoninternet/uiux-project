import Bell from "../Svg/Bell"
import Logo from "../Svg/Logo"

function DefaultLayouts({ children }) {
  return (
    <div>
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row justify-center align-middle">
          <div>
            <Logo />
          </div>
          <div className="flex justify-center align-middle">
            <button>
                <div className="flex flex-col justify-between w-[40px] h-[30px] rigin-center overflow-hidden">
                  <div className="bg-black h-[4px] w-10"></div>
                  <div className="bg-black h-[4px] w-10"></div>
                  <div className="bg-black h-[4px] w-10"></div>
                </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-center align-middle">
          <div>

          </div>
          <div>
            <Bell />
          </div>
        </div>

        <div className="flex flex-row justify-center align-middle">
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayouts