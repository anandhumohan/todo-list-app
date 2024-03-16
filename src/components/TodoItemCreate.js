import {useState} from "react";
import {createToDoList} from "../services/todoService"
import {Button, TextareaAutosize, TextField, Typography} from "@mui/material";

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
                <Typography variant="h3" component="h2">
                    TO-DO List
                </Typography>
            </div>
            <div>
                <TextField
                    varient={"outlined"}
                    label={"Task Name"}
                    value={taskName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
            <TextField
                placeholder={"Description"}
                multiline
            />
                <div>
                    <Button onClick={saveTask}>Save</Button>
                </div>

            </div>
        </div>
    );
}

export default TodoItemCreate;