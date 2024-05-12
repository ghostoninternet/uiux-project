import AddButton from "../../components/AddButton/AddButton";
import KPI from "../../components/KPI/KPI";
import Time from "../../components/Time/Time";

function ViewKPI() {
    const handleNewKPIClick = () => {
        
    }
    const tasksList1 = [
        {
            title: 'Quality of Project 1',
            Taskcompleted: 90,
            weight: 1,
        },
        {
            title: 'Student review 1',
            Taskcompleted: 20,
            weight: 1.5,
        },
        {
            title: 'Quality of assgnment 1',
            Taskcompleted: 60,
            weight: 0.8,
        },
    ]

    const tasksList2 = [
        {
            title: 'Quality of Project 2',
            Taskcompleted: 90,
            weight: 1,
        },
        {
            title: 'Student review 2',
            Taskcompleted: 80,
            weight: 1.5,
        },
        {
            title: 'Quality of assgnment 2',
            Taskcompleted: 85,
            weight: 0.8,
        },
    ]

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
                <KPI title={'Teaching quality'} KPIcompleted={72} tasksList={tasksList1}/>
            </div>
            <div className="mt-8">
                <KPI title={'Research'} KPIcompleted={80} tasksList={tasksList2}/>
            </div>
        </div>
    )
}

export default ViewKPI;