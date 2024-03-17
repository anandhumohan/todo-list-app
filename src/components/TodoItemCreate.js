import {useState} from "react";
import {createToDoList} from "../services/todoService"
import {Button, TextareaAutosize, TextField, Typography} from "@mui/material";
import {margin} from "@mui/system";

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
            <div style={{ marginTop: '75px' }}>
                <Typography variant="h3" component="h2">
                    TO-DO List
                </Typography>
            </div>
            <div style={{ marginTop: '5px' }}>
                <TextField
                    varient={"outlined"}
                    label={"Task Name"}
                    value={taskName}
                    onChange={handleInputChange}
                />
            </div>
            <div style={{ marginTop: '5px' }}>
            <TextField
                placeholder={"Description"}
                multiline
            />
                <div style={{ marginTop: '5px' }}>
                    <Button variant={"contained"} onClick={saveTask}>Save</Button>
                </div>

            </div>
        </div>
    );
}

export default TodoItemCreate;