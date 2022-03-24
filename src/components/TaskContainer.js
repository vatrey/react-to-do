import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import * as uuid from "uuid";
import ListContext from "../store/context";
import Form from "./Form";
import Task from "./Task";
import "./TaskContainer.css"

function TaskContainer() {
    const [taskList, updateTaskList] = useState([
        { id: uuid.v4(), name: "Task1", duration: 10, status: "Progress" },
        { id: uuid.v4(), name: "Task2", duration: 20, status: "Progress" }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        let currStatus = localStorage.getItem("loginStatus");
        if (currStatus == "false" || currStatus == null) navigate("/");
    });

    let deleteHandler = (id) => {
        let newArray = taskList.filter((t) => t.id !== id);
        updateTaskList(newArray);
    };

    let doneHandler = (id) => {
        let newArray = [...taskList];
        newArray.find(t => t.id === id).status = "Done";
        updateTaskList(newArray);
    }

    let logoutHandler = () => {
        localStorage.setItem("loginStatus", false);
        navigate("/");
    }

    let addHandler = (name, duration) => {
        if ((duration > 300 || duration < 0) && name.length > 50) {
            let error = "Please, pick some concise name for the task. \nTarget your task under 300 minutes and cannot be negative.";
            alert(error);
        }
        else if (duration > 300 || duration < 0) {
            let error = "Target your task under 300 minutes and cannot be negative.";
            alert(error);
        }
        else if (name.length > 50) {
            let error = "Please, pick some concise name for the task.";
            alert(error);
        }
        else {
            let newTask = { id: uuid.v4(), name: name, duration: duration, status: "Progress" };
            let newArray = [...taskList];
            newArray.push(newTask);
            updateTaskList(newArray);
        }
    }

    let iterate = (
        <Task deleteFunction={(id) => deleteHandler(id)} markDoneFunction={(id) => doneHandler(id)} />
    );

    return (
        <ListContext.Provider value={{taskList: [...taskList]}}>
            <div className="task-container">
                <button className="logout-btn" onClick={logoutHandler}>logout</button>
                <Form addTask={addHandler} />
                {iterate}
            </div>
        </ListContext.Provider>
    );
}
export default TaskContainer;