import fs from "fs";
import path from "path";

export function writeIntoFile(task) {
    const targetFilepath = path.join(import.meta.dirname , "../tasks.json");

    try {

        let taskList = [];
        
        if(fs.existsSync(targetFilepath)) {
            const data = fs.readFileSync(targetFilepath , 'utf8');
            taskList = JSON.parse(data);

            if (!Array.isArray(taskList)) {
                taskList = [taskList];
            }
        } else {
            throw new Error("Unable to find the file or directory");
        }

        taskList.push(task);

        fs.writeFileSync(targetFilepath , JSON.stringify(taskList, null, 2), 'utf8');

        console.log(`Task is successfully written into the file`);
    } catch (error) {
        console.log("error : " , error.name);
        console.log("message : " , error.message);
        console.log("cause : " , error.cause);
    }
}