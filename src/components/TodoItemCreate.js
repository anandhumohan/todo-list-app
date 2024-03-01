import {useState} from "react";
import {createToDoList} from "../services/todoService"

function TodoItemCreate({onTaskCreate}) {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value)
    }

    const saveTask = async () => {
        const data = {
            taskName: taskName
        };
        const newTask = await createToDoList(data);
        if (onTaskCreate) {
            onTaskCreate(newTask);
        }
    };

    return (
        <div>
            <div>
                <h3>To-Do List</h3>
            </div>
            <div>
                <input
                    type={"text"}
                    placeholder={"Task Name"}
                    value={taskName}
                    onChange={handleInputChange}
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