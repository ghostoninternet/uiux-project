import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";
import { KpiData } from "../../api/KpiApi";
import { useState } from "react";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
import NewTaskPopUp from "../../components/Popup/NewTaskPopUp";
import NewKpiPopUp from "../../components/Popup/NewKpiPopUp";
function ViewKPI() {
    

    const [detailTaskToggle, setDetailTaskToggle] = useState(false)
    const [newTaskToggle, setNewTaskToggle] = useState(false)
    const [newKpiToggle, setNewKpiToggle] = useState(false)
    const taskExample = {
        title: '',
        extendedProps: {
          evaluatuon: '',
          target: '',
          value: null,
          Taskcompleted: null,
          weight: null,
        }
      }
    const [taskDetail, setTaskDetail] = useState(taskExample)

    const handleNewKPIClick = () => {
        setNewKpiToggle(true)
    }

    return (
        <div>
            <div className="mx-8 mt-4 min-w-[1180px]">
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
                                <KPI title={e.title} KPIcompleted={e.KPIcompleted} tasksCompleted={e.tasksCompleted} tasksList={e.tasksList} taskCLick={setDetailTaskToggle} setTaskDetail={setTaskDetail} setNewTask={setNewTaskToggle}/>
                            </div>
                        )
                    })
                }
            </div>
            <NewTaskPopUp popUpToggle={newTaskToggle} setPopUpToggle={setNewTaskToggle}/>
            <TaskDetailPopUp title={taskDetail.title} event={taskDetail} popUpToggle={detailTaskToggle} setPopUpToggle={setDetailTaskToggle}/>
            <NewKpiPopUp popUpToggle={newKpiToggle} setPopUpToggle={setNewKpiToggle} />
        </div>
    )
}

export default ViewKPI;