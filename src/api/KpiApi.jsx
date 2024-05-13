import { tasksList1, tasksList2 } from "../api/TaskApi";

const TeachingQuality = {
    title: 'Teaching quality',
    KPIcompleted: 72,
    tasksList: tasksList1,
}

const Research = {
    title: 'Research',
    KPIcompleted: 80,
    tasksList: tasksList2,
}

export const KpiData = [
    TeachingQuality,
    Research,
]