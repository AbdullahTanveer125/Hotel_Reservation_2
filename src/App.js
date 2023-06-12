import "./App.css";
// import Navbar from "./First Project/NAVBAR/Navbar";
// import Home from "./First Project/HOME/Home";
// import About from "./First Project/ABOUT/About";
// import Contact from "./First Project/CONTACT/Contact";
// import Service from "./First Project/SERVICE/Service";
// import Error from "./First Project/ERROR_PAGE/Error";
// import Footer from "./First Project/FOOTER/Footer";


// import Go_to_top from "./First Project/GO_TO_TOP/Go_to_top";
// import Final_todo from "./ToDo List/Final_todo";
// import Parent_of_gym from "./Gym/Parent_of_gym";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Parent_of_hotel from "./Hotel Reservation/Parent_of_hotel"



function App() {

  return (
    <div className="a">
      {/* <Navbar/>

      <Routes>
        <Route path="/"    element={ <Home/> }    />
        <Route path="/About"   element={ <About/> }   />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Service" element={ <Service/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>


      <Footer/>

      <Go_to_top /> */}

      {/* <Final_todo /> */}

      <Parent_of_hotel />
    </div>
  );
}

export default App;
