import React, {useEffect, useState} from "react";
import {fetchTasks} from "../services/todoService";
import TodoItemCreate from "./TodoItemCreate";

function TodoList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        getTasks().catch(error => console.error('Error in getTasks:', error));
    }, []);

    const addTaskToList = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div>
            <TodoItemCreate onTaskCreate={addTaskToList}/>
            {tasks?.map((task, i) => (
                <div key={i}>
                    {task.taskName}
                </div>
            )) || <div></div>}
        </div>

    );
}

export default TodoList;