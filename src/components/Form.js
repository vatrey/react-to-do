import { useState } from "react";
import "./Form.css";

function Form(props) {
    const [taskName, changeTaskName] = useState("");
    const [taskDuration, changeTaskDuration] = useState(0);
    let submitHandler = () => {
        props.addTask(taskName, taskDuration);
    };

    let changeTaskNameHandler = (event) => {
        changeTaskName(event.target.value);
    };

    let changeTaskDurationHandler = (event) => {
        changeTaskDuration(event.target.value);
    };

    return (
        <div className="form">
            <div>
                <h3 className="form-head">Add Your Task!</h3>
            </div>
            <div className="real-form">
                <div className="task-input-name">
                    <label>Task Name:</label>
                    <input className="name-input" type="text" value={taskName} onChange={changeTaskNameHandler}></input>
                </div>
                <div className="task-innput-duration">
                    <label>Task Duration:</label>
                    <input className="time-input" type="number" value={taskDuration} onChange={changeTaskDurationHandler} min="0" max="300"></input>
                </div>
                <button className="submit-btn" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    );    
}

export default Form;