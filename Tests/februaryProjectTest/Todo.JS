function Todo(taskDescription,
    date,
    time, priority) {
    this.taskId = `Task ID#${Math.ceil(Math.random() * 999999)}`;
    this.taskDescription = taskDescription;
    this.date = date;
    this.time = time;
    this.priority = priority;


}