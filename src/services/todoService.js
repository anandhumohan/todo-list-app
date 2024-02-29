import axios from 'axios';

const API_URL = "https://localhost/8080/";

export const createToDoList = async (data) => {
    try{
        const response = await axios.post(API_URL,data);
        return response.data;
    }catch (error){
        console.error(error);
    }
};