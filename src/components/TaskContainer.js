import Form from "./Form";
import Task from "./Task";
import React, { useState } from 'react';
import "./TaskContainer.css"

function TaskContainer() {
    const [taskList, updateTaskList] = useState([
        {id: 1, name: "Task1", duration: 10, status: "Progress"},
        {id: 2, name: "Task2", duration: 20, status: "Progress"}
    ]);

    let deleteHandler = (id) => {
        let newArray = taskList.filter((t) => t.id !== id);
        updateTaskList(newArray);
    };

    let doneHandler = (id) => {
        let newArray = [...taskList];
        newArray.find(t => t.id === id).status = "Done";
        updateTaskList(newArray);
    }

    let addHandler = (name, duration) => {
        if((duration > 300 || duration < 0) && name.length > 50) {
            let error = "Please, pick some concise name for the task. \nTarget your task under 300 minutes and cannot be negative.";
            alert(error); 
        }
        else if(duration > 300 || duration < 0) {
            let error = "Target your task under 300 minutes and cannot be negative.";
            alert(error);
        }
        else if(name.length > 50) {
            let error = "Please, pick some concise name for the task.";
            alert(error);
        }
        else {
            let newTask = {id: taskList.length+1, name: name, duration: duration, status: "Progress"};
            let newArray = [...taskList];
            newArray.push(newTask);
            updateTaskList(newArray);
        }
    }
    
    let iterate = taskList.map((ele) => (
        <Task id={ele.id} name={ele.name} duration={ele.duration} key={ele.id} status={ele.status} deleteFunction={(id) => deleteHandler(id)} markDoneFunction={(id) => doneHandler(id)}/>
    )); 

    return (
        <div className="task-container">
            <Form addTask={addHandler}/>
            {iterate}
        </div>
    );
}
export default TaskContainer;