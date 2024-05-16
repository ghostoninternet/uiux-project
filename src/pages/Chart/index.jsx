import LineChart from "../../components/Chart/LineChart";
function index() {
  return (
    <div className="p-10">
        <div className="p-5 bg-white min-h-36 shadow-lg rounded-xl">
            <LineChart label={true} />
        </div>
    </div>
  )
}

export default index