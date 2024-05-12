import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";

function ViewKPI() {
    const handleNewKPIClick = () => {
        
    }

    return (
        <div className="mx-8 mt-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-4xl mb-2">Today</h2>
                    <Time />
                </div>
                <div>
                    <AddButton tittle={'New KPI'} onClick={handleNewKPIClick}/>
                </div>
            </div>

            <div className="mt-8">
                <KPI title={'Teaching quality'}/>
            </div>
        </div>
    )
}

export default ViewKPI;