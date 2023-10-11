import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Header from "./Components/Header";

import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify.css"


function Parent_of_MERN_authentication(){
    return (
        <div>
            
            <Header />

            {/* <Router> */}
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Dashboard />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                    </Routes>
                </div>
            {/* </Router> */}

            <ToastContainer />
        </div>
    )
}


export default Parent_of_MERN_authentication;