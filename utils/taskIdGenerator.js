import fs from "fs";
import path from "path";

export function idGenerator() {
    /**
     * import.meta.dirname gives the absolute path of the directory containing the current module.
     * 
     * i.e., /e/Backend_course_development_2025/TaskTracker/utils
     * 
     * path.join() : takes two parameters here first parameter is import.meta.dirname
     * and second is the path of the file we want to read .
     * 
     * path.join() : resolves this and gives the absolute path with respect to the
     * second parameter we have passed.
     * 
     * i.e., /e/Backend_course_development_2025/TaskTracker/taskId.txt
     */
    const filepath = path.join(import.meta.dirname, '../taskId.txt');

    let currentTaskId = 0;

    /**
     * In the Node.js fs module, fs.existsSync(path) is a synchronous method used to check whether
     *  a file or directory exists at the specified path. It returns a simple boolean: true if the
     *  path exists, and false otherwise
     */
    if(fs.existsSync(filepath)) {

        /**
         * fs.readFileSync() is a built-in Node.js method used to read the contents of a file in a synchronous, 
         * blocking manner. When you call this function, Node.js pauses the execution of your program 
         * (blocking the single-threaded event loop) until the file is fully read
         */
        const data = fs.readFileSync(filepath , "utf8");
        currentTaskId = parseInt(data , 10) || 0;
    }

    currentTaskId++;

    /**
     * fs.writeFileSync() is a built-in synchronous method in Node.js used to write data to a file,
     *  automatically creating the file if it does not exist or overwriting its content by default. 
     * Because it is synchronous, it blocks the Node.js event loop and halts further code execution 
     * until the writing process completely finishes
     */

    fs.writeFileSync(filepath , currentTaskId.toString() , "utf8");

    return currentTaskId;
}