import {useState} from "react";
import * as events from "events";

function TodoItemCreate(){
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value)
    }

    return(
        <div>
        <div>
            <h3>To-Do List</h3>
        </div>
        <div>
            <input
                type={"text"}
                placeholder={"Task Name"}
                value={taskName}
            />
            </div>
            <div>
            <textarea
                placeholder={"Description"}
            />
            <div>
                <button>Save</button>
            </div>

        </div>
        </div>
    );
}

export default TodoItemCreate;