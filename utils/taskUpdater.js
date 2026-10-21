import fs from "fs";
import path from "path";
import { getTimestamp } from "./dateTime.js";
import { findTaskById } from "./helpers/findTask.js";

export function updateTaskStatus(taskId , taskStatus) {
    let filepath = path.join(import.meta.dirname , "../tasks.json");

    try {
        
        if(fs.existsSync(filepath)) {

            const contentOfFile = fs.readFileSync(filepath , 'utf8');
            let allTasks = JSON.parse(contentOfFile);

            const indexOfTask = findTaskById(allTasks , taskId);

            if(indexOfTask == -1) {
                throw new Error(`Unable to find the task with taskId : ${taskId}`);
            }

            console.log(allTasks[indexOfTask]);

            allTasks[indexOfTask].status = taskStatus;
            allTasks[indexOfTask].updatedAt = getTimestamp();

            console.log(allTasks[indexOfTask]);

            fs.writeFileSync(filepath , JSON.stringify(allTasks , null , 2) , 'utf8');

            console.log(`Task with id : ${taskId} has been updated successfully`);
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}

export function updateTask(taskId , description) {
    let filepath = path.join(import.meta.dirname , "../tasks.json");

    try {
        
        if(fs.existsSync(filepath)) {

            const contentOfFile = fs.readFileSync(filepath , 'utf8');
            let allTasks = JSON.parse(contentOfFile);

            const indexOfTask = findTaskById(allTasks , taskId);

            if(indexOfTask == -1) {
                throw new Error(`Unable to find the task with taskId : ${taskId}`);
            }

            allTasks[indexOfTask].description = description;
            allTasks[indexOfTask].updatedAt = getTimestamp();

            fs.writeFileSync(filepath , JSON.stringify(allTasks , null , 2) , 'utf8');

            console.log(`Task with id : ${taskId} has been updated successfully`);
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}