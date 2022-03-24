import './Task.css';
import ListContext from '../store/context';
function Task(props) {

    let removeHandler = (id) => {
        props.deleteFunction(id);
    };

    let markDoneHandler = (id) => {
        props.markDoneFunction(id);
    }

    return (
        <ListContext.Consumer >
            {(ctx) => {
                let iterate = ctx.taskList.map((ele, index) => (
                    <div className="task" key={index}>
                        <p className="task-name">{ele.name}</p>
                        <p className="task-duration">{ele.duration} min</p>
                        <p className="task-status">{ele.status}</p>
                        <button className="remove-btn" onClick={() => removeHandler(ele.id)}>Remove</button>
                        {ele.status === "Progress" ?
                            (<button className="done-btn" onClick={() => markDoneHandler(ele.id)}>Mark Done</button>) :
                            (<button className="done-btn cursor-disabled" disabled>Done</button>)}
                    </div>
                ));
                console.log(ctx.taskList);
                return (
                    <div>
                        {iterate}
                    </div>
                );
            }}
        </ListContext.Consumer>
    );
}
export default Task;