import type Task from "../../../types/task";

interface Tasks {
    [index: number]: Task
}

class TaskProvider {
    constructor(tasks:Tasks)
    {
        this.tasks = tasks
    }

    findTask(hour, day): ?Task
    {
        let taskOut = null
        this.tasks.forEach(task => {
            if(task.time.day === day && task.time.hour === hour)
            {
                taskOut = task
            }
        })

        return  taskOut
    }
}

export default TaskProvider