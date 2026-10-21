export function findTaskById(allTasks , taskId) {

    const totalTasks = allTasks.length;
    let ind = -1;

    for(let i = 0 ; i < totalTasks ; i++) {
        const currentTask = allTasks[i];

        if(currentTask.id == taskId) {
            ind = i;
            break;
        }
    }

    return ind;
}