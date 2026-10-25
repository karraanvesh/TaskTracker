import { addTaskService, deleteTaskService , getTasksByStatusService, updateTaskService, updateTaskStatusService } from "../services/task.service.js";

export function addTaskController(taskDescription) {
    const taskResponse = addTaskService(taskDescription);

    console.log(taskResponse);
}

export function updateTaskController(taskId , description) {
    const taskResponse = updateTaskService(taskId , description);

    console.log(taskResponse);
}

export function updateTaskStatusController(taskId , taskStatus) {
    const taskResponse = updateTaskStatusService(taskId , taskStatus);
    
    console.log(taskResponse);
}

export function deleteTaskController(taskId) {
    const response = deleteTaskService(taskId);

    console.log(response);
}

export function getTasksController(taskStatus) {
    const tasks = getTasksByStatusService(taskStatus);

    console.log(tasks);
}