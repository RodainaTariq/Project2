function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
}
const tasks = [];
function addTask() {
    console.log("Enter task description:");
    const description = readline();
    console.log("Enter task due date:");
    const dueDate = readline();
    console.log("Enter task priority:");
    const priority = readline();    
    const task = new Task(description, dueDate, priority);
    tasks.push(task);
    console.log("Task added successfully!");
}
function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } 
    else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - Due: ${task.dueDate} - Priority: ${task.priority} - Completed: ${task.completed}`);
        });
    }
}
function listCompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed);
    if (completedTasks.length === 0) {
        console.log("No completed tasks found.");
    } 
    else {
        completedTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - Due: ${task.dueDate} - Priority: ${task.priority}`);
        });
    }
}
function markTaskAsDone() {
    console.log("Enter the task number to mark as completed:");
    const taskNumber = parseInt(readline());
    if (isNaN(taskNumber) || taskNumber <= 0 || taskNumber > tasks.length) {
        console.log("Invalid task number.");
        return;
    }    
    const task = tasks[taskNumber - 1];
    task.completed = true;
    console.log("Task marked as completed!");
}
function deleteTask() {
    console.log("Enter the task number to delete:");
    const taskNumber = parseInt(readline());
    
    if (isNaN(taskNumber) || taskNumber <= 0 || taskNumber > tasks.length) {
        console.log("Invalid task number.");
        return;
    }
    
    tasks.splice(taskNumber - 1, 1);
    console.log("Task deleted successfully!");
}
function sortTasksByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log("Tasks sorted by due date!");
}
function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
    console.log("Tasks sorted by priority!");
}
function clearAllTasks() {
    tasks.length = 0;
    console.log("All tasks cleared!");
}
console.log("***************************");
console.log("Welcome to JS TODO-APP");
console.log("***************************");    
let choice;    
while (choice !== "0") {
    console.log("Select an action:");
    console.log("1) Add a new task");
    console.log("2) List all tasks");
    console.log("3) List completed tasks");
    console.log("4) Mark the task as done");
    console.log("5) Delete a task");
    console.log("6) Sort tasks by the due date");
    console.log("7) Sort tasks by priority");
    console.log("8) Clear all tasks");
    console.log("0) Exit");
    console.log("***************************");
    console.log("What's your choice?");
    choice = readline();
        
    switch (choice) {
        case "1":
            addTask();
            break;
        case "2":
            listTasks();
            break;
        case "3":
            listCompletedTasks();
            break;
        case "4":
            markTaskAsDone();
            break;
        case "5":
            deleteTask();
            break;
        case "6":
            sortTasksByDueDate();
            break;
        case "7":
            sortTasksByPriority();
            break;
        case "8":
            clearAllTasks();
            break;
        case "0":
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            break;
    }
}
function readline() {
    const readlineSync = require("readline-sync");
    return readlineSync.question("> ");
}
/**
 * Some advices to run this code :
 * - You should install this to make input : npm install readline-sync
 * - You should input date like this format : YYYY-MM-DD
 */