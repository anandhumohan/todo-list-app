import axios from 'axios';

const API_URL = "http://localhost:8080/api/tasks";

export const createToDoList = async (data) => {
    try{
        const response = await axios.post(API_URL,data);
        return response.data;
    }catch (error){
        console.error(error);
    }
};

export const fetchTasks = async () => {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }catch (error){
        console.error(error);
    }
};