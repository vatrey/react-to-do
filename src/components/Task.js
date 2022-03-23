import './Task.css'
function Task(props) {

    let removeHandler = (id) => {
        props.deleteFunction(id);
    };

    let markDoneHandler = (id) => {
        props.markDoneFunction(id);
    }

    return (
        <div className="task">
            <p className="task-name">{props.name}</p>
            <p className="task-duration">{props.duration} min</p>
            <p className="task-status">{props.status}</p>
            <button className="remove-btn" onClick={() => removeHandler(props.id)}>Remove</button>
            {props.status === "Progress" ? 
                (<button className="done-btn" onClick={() => markDoneHandler(props.id)}>Mark Done</button>) : 
                (<button className="done-btn" disabled>Done</button>)}
        </div>
    );
}
export default Task;