import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";
import { tasksList1, tasksList2 } from "../../api/TaskApi";
import { KpiData } from "../../api/KpiApi";

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

                {
                    KpiData.map((e, i) => {
                        return (
                            <div key={i} className="mt-8">
                                <KPI title={e.title} KPIcompleted={e.KPIcompleted} tasksList={e.tasksList}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ViewKPI;