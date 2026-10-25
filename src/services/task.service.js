import { addTaskRepository, deleteTaskRepository, getTaskByStatusRepository, updateTaskRepository, updateTaskStatusRepository } from "../repositories/task.repository.js";

export function addTaskService(taskDescription) {
    const task = addTaskRepository(taskDescription);

    return task;
}

export function updateTaskService(taskId , description) {
    const task = updateTaskRepository(taskId , description);

    return task;
}

export function updateTaskStatusService(taskId , taskStatus) {
    const task = updateTaskStatusRepository(taskId , taskStatus);

    return task;
}

export function deleteTaskService(taskId) {
    const response = deleteTaskRepository(taskId);

    return response;
}

export function getTasksByStatusService(taskStatus) {
    const tasks = getTaskByStatusRepository(taskStatus);

    return tasks;
}