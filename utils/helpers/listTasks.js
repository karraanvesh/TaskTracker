import fs from "fs";
import path from "path";

function typeChecker(status) {
    const name = "status";

    const result = (typeof status === typeof "name");

    return result;
}

export function listTasksByStatus(status) {
    const pathOfTheFile = path.join(import.meta.dirname , "./../../tasks.json");

    try {
            
        if(fs.existsSync(pathOfTheFile)) {

            const contentOfFile = fs.readFileSync(pathOfTheFile , 'utf8');
            let allTasks = JSON.parse(contentOfFile);

            const noOfTasks = allTasks.length;

            const isString = typeChecker(status);

            if(isString) {

                for(let i = 0 ; i < noOfTasks ; i++) {

                    const currentTask = allTasks[i];

                    if(currentTask.status === status) {
                        console.log(allTasks[i]);
                    }
                }
            } else {
                for(let i = 0 ; i < noOfTasks ; i++) {

                    const currentTask = allTasks[i];

                    console.log(currentTask);
                }
            }
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}