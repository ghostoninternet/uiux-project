import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";
import { tasksList1, tasksList2 } from "../../api/TaskApi";
import { TeachingQuality, Research } from "../../api/KpiApi";

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
                    <KPI title={TeachingQuality.title} KPIcompleted={TeachingQuality.KPIcompleted} tasksList={TeachingQuality.tasksList}/>
                </div>
                <div className="mt-8">
                    <KPI title={Research.title} KPIcompleted={Research.KPIcompleted} tasksList={Research.tasksList}/>
                </div>
            </div>
        </div>
    )
}

export default ViewKPI;