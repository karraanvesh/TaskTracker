import path from "path";
import fs from "fs";
import { findTaskById } from "../utils/helpers/findTask.js";
import { getTimestamp } from "../utils/helpers/dateTime.js";
import { idGenerator } from "../utils/helpers/taskIdGenerator.js";
import {isValidString } from "../utils/helpers/typeChecker.js";

const filepath = path.join(import.meta.dirname, "./../../logs/tasks.json");

export function addTaskRepository(taskDescription) {

    try {

        let task = {
            id : idGenerator(),
            description : taskDescription,
            status : "todo",
            createdAt : getTimestamp(),
            updatedAt : getTimestamp()
        };

        let taskList = [];
        
        if(fs.existsSync(filepath)) {

            /**
             * Here , we are synchronously reading the contents of the file , since
             * the encoding is specified "utf-8" , the buffer data will be converted to the 
             * string and will be stored in data variable
             */
            const data = fs.readFileSync(filepath , 'utf8');

            /**
             * JSON.parse() : checks whether the passed string is a valid JSON or not
             * . If the passed string is a valid JSON then converts every individual json 
             * into an object and stores in an array and returns it.
             */
            taskList = JSON.parse(data);

            // checking whether the taskList is an array or not 
            if (!Array.isArray(taskList)) {
                taskList = [taskList]; // if not , we are making it as an array 
            }
        } else {
            throw new Error("Unable to find the file or directory");
        }

        taskList.push(task); // adding the task to the taskList Array

        /**
         * Synchronously , we are writing the data into the file i.e., Here 
         * we have read the file , added the new task and writing the tasks 
         * into the file.
         * 
         * Converts the Array of jsons into a string and writes into the file
         */
        fs.writeFileSync(filepath , JSON.stringify(taskList, null, 2), 'utf8');

        const result = `Task is successfully written into the file`;

        return result;
    } catch (error) {
        console.log("error : " , error.name);
        console.log("message : " , error.message);
        console.log("cause : " , error.cause);
    }
}

export function updateTaskRepository(taskId , description) {
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

            const result = `Task with id : ${taskId} has been updated successfully`;

            return result;
        } else {
            throw new Error("Unable to find the file or directory");
        }
        } catch (error) {
            console.log(error);
        }
}

export function updateTaskStatusRepository(taskId , taskStatus) {
    try {
            
        if(fs.existsSync(filepath)) {

            const contentOfFile = fs.readFileSync(filepath , 'utf8');
            let allTasks = JSON.parse(contentOfFile);

            const indexOfTask = findTaskById(allTasks , taskId);

            if(indexOfTask == -1) {
                throw new Error(`Unable to find the task with taskId : ${taskId}`);
            }

            // console.log(allTasks[indexOfTask]);

            const statusMode = {
                "mark-in-progress" : "in-progress",
                "mark-done"        : "done"
            };

            taskStatus = statusMode[taskStatus];

            allTasks[indexOfTask].status = taskStatus;
            allTasks[indexOfTask].updatedAt = getTimestamp();

            // console.log(allTasks[indexOfTask]);

            fs.writeFileSync(filepath , JSON.stringify(allTasks , null , 2) , 'utf8');

            const result = `Task with id : ${taskId} has been updated successfully`;
            
            return result;
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}

export function deleteTaskRepository(taskId) {
    try {
    
        if(fs.existsSync(filepath)) {

            const fileContent = fs.readFileSync(filepath , 'utf8');
            const allTasks = JSON.parse(fileContent);

            const taskInd = findTaskById(allTasks , taskId);

            allTasks.splice(taskInd , 1);

            fs.writeFileSync(filepath , JSON.stringify(allTasks , null , 2) , 'utf8');

            const result = `Task with id : ${taskId} has been deleted successfully`;

            return result;
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}

export function getTaskByStatusRepository(taskStatus) {
    try {
                
        if(fs.existsSync(filepath)) {

            const contentOfFile = fs.readFileSync(filepath , 'utf8');
            let allTasks = JSON.parse(contentOfFile);

            const noOfTasks = allTasks.length;

            const isString = isValidString(taskStatus);

            let result = [];

            if(isString) {

                for(let i = 0 ; i < noOfTasks ; i++) {

                    const currentTask = allTasks[i];

                    if(currentTask.status === taskStatus) {
                        // console.log(allTasks[i]);

                        result.push(allTasks[i]);
                    }
                }
            } else {
                for(let i = 0 ; i < noOfTasks ; i++) {

                    const currentTask = allTasks[i];

                    result.push(allTasks[i]);

                    // console.log(currentTask);
                }
            }

            return result;
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}