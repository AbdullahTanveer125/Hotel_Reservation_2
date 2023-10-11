import axios from "axios";

const API_URL="/user/insert";
const API_URL_2="/user/login";

// User register
async function register(userData){
    const response= await axios.post(API_URL, userData);

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data;
}


// User login
async function login(userData){
    const response= await axios.post(API_URL_2, userData);

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data;
}



//Logout User
function logout(){
    localStorage.removeItem("user");
}


const authService={
    register,
    logout,
    login
}

export default authService;