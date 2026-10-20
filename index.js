import { getTimestamp } from "./utils/dateTime.js";

function addTask(cliArguments) {
    const taskDescription = cliArguments[3];

    // we need to define the properties of the task , before we add / write this task
    // into the json file

    console.log("after increment : " , process.env.counter)

    // todo : implement the incremental id generator logic using filesystem
    /**
     * search for : how do i implement a incremental tasks id in js , 
     * even if i recompile the counter should resume from the previous value not from start
     * 
     * for examples of how to implement in backend
     */
    let task = {
        description : taskDescription,
        status : "todo",
        createdAt : getTimestamp(),
        updatedAt : getTimestamp()
    };

    console.log("task is : " , task);
}
const cliArguments = process.argv;

console.log(cliArguments);

const operation = cliArguments[2];

switch(operation) {
    case "add" :
        addTask(cliArguments);
    break;

    case "delete" :
        console.log("delete operation");
    break;

    case "update" :
        console.log("update operation");
    break;

    case "mark-in-progress" :
        console.log("mark-in-progress operation");
    break;

    case "mark-done" :
        console.log("mark-done operation");
    break;

    case "list" :
        console.log("list operation");
    break;
}