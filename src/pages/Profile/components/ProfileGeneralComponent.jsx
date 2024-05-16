import CompletedKPI from "../../../components/Svg/CompletedKPI"
import CreatedKIP from "../../../components/Svg/CreatedKIP"

function ProfileGeneralComponent() {
  return (
    <div className="w-[90%] flex justify-between mx-auto">
      <div className="w-[30%]">
        <div className="w-[80%] pt-[20px] pb-[100px] flex flex-col justify-center align-middle bg-white rounded-2xl gap-10 shadow-2xl">
          <div className="w-[80%] mx-auto flex flex-col gap-2">
            <div className="font-bold text-xl text-center">
              {"About Me"}
            </div>
            <div className="text-center">
              {"\"Work hard, be kind, and amazing things will happen.\""}
            </div>
          </div>
          <div className="w-[80%] mx-auto flex flex-col gap-10">
            <div className="flex gap-8">
              <div>
                <CreatedKIP />
              </div>
              <div className="font-bold leading-loose">
                159 KPI Created
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <CompletedKPI />
              </div>
              <div className="font-bold leading-loose">
                102 KPI completed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%]">
        <div className="w-full pt-[20px] pb-[100px] flex flex-col justify-center align-middle bg-white rounded-2xl gap-10 shadow-2xl">
          <div className="w-[80%] mx-auto flex flex-col gap-4">
            <div className="font-bold text-xl mb-3">
              {"Contact Infomation"}
            </div>
            <div className="font-bold text-xl">
              {"Hoàng Gia Anh"}
            </div>
            <div className="h-[1px] w-full bg-black">
            </div>
            <div className="w-full flex justify-between align-middle">
              <div className="font-bold w-[30%]">
                {"Date of birth"}
              </div>
              <div className="w-[50%]">
                {"05/09/2003"}
              </div>
            </div>
            <div className="w-full flex justify-between align-middle">
              <div className="font-bold w-[30%]">
                {"Phone number"}
              </div>
              <div className="w-[50%]">
                {"(123)-456-7890"}
              </div>
            </div>
            <div className="w-full flex justify-between align-middle">
              <div className="font-bold w-[30%]">
                {"Email"}
              </div>
              <div className="w-[50%]">
                {"boycodon2k3@gmail.com"}
              </div>
            </div>
            <div className="w-full flex justify-between align-middle">
              <div className="font-bold w-[30%]">
                {"Facebook"}
              </div>
              <div className="w-[50%]">
                {"www.example.com"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileGeneralComponent