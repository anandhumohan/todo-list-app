import {useState} from "react";
import {createToDoList} from "../services/todoService"

function TodoItemCreate(){
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value)
    }

    const saveTask = async() => {
        const data = {
            name:taskName
        };
        await createToDoList(data);
    } ;

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
                <button onClick={saveTask}>Save</button>
            </div>

        </div>
        </div>
    );
}

export default TodoItemCreate;