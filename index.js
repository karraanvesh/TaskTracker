import { getTimestamp } from "./utils/dateTime.js";
import { deleteTask } from "./utils/deleteTask.js";
import { listTasksByStatus } from "./utils/helpers/listTasks.js";
import { idGenerator } from "./utils/taskIdGenerator.js";
import { updateTask, updateTaskStatus } from "./utils/taskUpdater.js";
import { writeIntoFile } from "./utils/taskWriter.js";

function addTask(cliArguments) {
    const taskDescription = cliArguments[3];

    let task = {
        id : idGenerator(),
        description : taskDescription,
        status : "todo",
        createdAt : getTimestamp(),
        updatedAt : getTimestamp()
    };

    writeIntoFile(task);
}
const cliArguments = process.argv;

console.log(cliArguments);

const operation = cliArguments[2];

switch(operation) {
    case "add" :
        addTask(cliArguments);
    break;

    case "delete" :
        const taskId = Number(process.argv[3]);
        deleteTask(taskId);
    break;

    case "update" :
        const id = Number(process.argv[3]);
        const description = process.argv[4];
        updateTask(id , description);
    break;

    case "mark-in-progress" :
        updateTaskStatus(Number(process.argv[3]) , "in-progress")
    break;

    case "mark-done" :
        updateTaskStatus(Number(process.argv[3]) , "done")
    break;

    case "list" :
        const noOfArguments = process.argv.length;

        if(noOfArguments == 3) {
            listTasksByStatus(null);
        } else {
            listTasksByStatus(process.argv[3]);
        }
        
    break;
}