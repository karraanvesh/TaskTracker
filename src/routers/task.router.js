import { addTaskController, deleteTaskController, getTasksController, updateTaskController, updateTaskStatusController } from "../controllers/task.controller.js";

let descriptionOfTask;

const cliArguments = process.argv;

const typeOfOperation = cliArguments[2];


if(typeOfOperation === "add") {
    descriptionOfTask = cliArguments[3];
} else {

    if(typeOfOperation == "update") {
        descriptionOfTask = cliArguments[4];
    }
}

export function taskRouter() {

    if(typeOfOperation == "add") {
        addTaskController(descriptionOfTask);

    } else if(typeOfOperation == "update") {
        updateTaskController(Number(cliArguments[3]) , descriptionOfTask);

    } else if(typeOfOperation == "mark-in-progress") {
        updateTaskStatusController(Number(cliArguments[3]) , cliArguments[2]);

    } else if(typeOfOperation == "mark-done") {
        updateTaskStatusController(Number(cliArguments[3]) , cliArguments[2]);

    } else if(typeOfOperation == "delete") {
        deleteTaskController(Number(cliArguments[3]));

    } else if(typeOfOperation == "list") {
        getTasksController(cliArguments[3]);
    }
}