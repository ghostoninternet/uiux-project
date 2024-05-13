import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";
import { tasksList1, tasksList2 } from "../../api/TaskApi";

function ViewKPI() {
    const handleNewKPIClick = () => {
        
    }
    return (
        <div>
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
                    <KPI title={'Teaching quality'} KPIcompleted={72} tasksList={tasksList1}/>
                </div>
                <div className="mt-8">
                    <KPI title={'Research'} KPIcompleted={80} tasksList={tasksList2}/>
                </div>
            </div>
        </div>
    )
}

export default ViewKPI;