import fs from "fs";
import path from "path";
import { findTaskById } from "./helpers/findTask.js";

export function deleteTask(taskId) {
    const filepath = path.join(import.meta.dirname , "../tasks.json");

    try {

        if(fs.existsSync(filepath)) {

            const fileContent = fs.readFileSync(filepath , 'utf8');
            const allTasks = JSON.parse(fileContent);

            const taskInd = findTaskById(allTasks , taskId);

            allTasks.splice(taskInd , 1);

            fs.writeFileSync(filepath , JSON.stringify(allTasks , null , 2) , 'utf8');

            console.log(`Task with id : ${taskId} has been deleted successfully`);
        } else {
            throw new Error("Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}