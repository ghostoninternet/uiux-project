import { tasksList1, tasksList2 } from "../api/TaskApi";

const TeachingQuality = {
    title: 'Teaching quality',
    KPIcompleted: 80,
    tasksList: tasksList1,
    tasksCompleted: 8,
    startDate: '02/09/1945',
    dueDate: '30/04/1975',
}

const Research = {
    title: 'Research',
    KPIcompleted: 30,
    tasksList: tasksList2,
    tasksCompleted: 1,
    startDate: '02/09/1945',
    dueDate: '30/04/1975',
}

export const KpiData = [
    TeachingQuality,
    Research,
]