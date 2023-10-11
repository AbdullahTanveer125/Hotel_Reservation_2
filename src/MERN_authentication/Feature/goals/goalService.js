import axios from "axios";

const API_URL= "/goal/insert";
const API_URL_2= "/goal/get_all";
const API_URL_3= "/goal/delete";


// create goal
async function createGoal(goalData, token){
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response= await axios.post(API_URL, goalData, config);

    return response.data;
}


// get goals
async function getGoals(token){
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response= await axios.get(API_URL_2, config);

    return response.data;
}



// delete goal
async function deleteGoal(goalId, token){
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response= await axios.delete(API_URL_3 + goalId, config);

    return response.data;
}



const goalService={
    createGoal,
    getGoals,
    deleteGoal,
}


export default goalService;