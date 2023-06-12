import "./Parent_of_hotel.css";

import Body from "./components/Body/Body";
import Feature_rooms from "./components/Feature of room/Feature_rooms";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Service_box from "./components/Services/Service_box/Service_box";
import Services from "./components/Services/Services";

import Hero from "./components/Hero/Hero";
import Rooms from "./components/Rooms/Rooms";
import Filter from "./components/Filter/Filter";
import Room_Details from "./components/Room Details/Room_Details";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function Parent_of_hotel() {
  return (
    <div className="">

      <Header />

      {/* <Home /> */}

      <Routes>
        <Route path="/"    element={ <Home/> }    />
        <Route path="/Rooms"   element={ <Rooms/> }   />
        <Route path="/Services" element={ <Services/> } />
        <Route path="/Feature_rooms" element={ <Feature_rooms/> } />
        <Route path="./Room_Details" element={ <Room_Details /> } />
        {/* <Route path="*" element={ <Error/> } /> */}
      </Routes>

      <Footer />

      
      {/* <Header /> */}
      {/* <Body /> */}
      {/* <Services /> */}
      {/* <Feature_rooms /> */}
      {/* <Footer /> */}

      

      

      {/* <Body /> */}
      {/* <Services /> */}
      {/* <Feature_rooms /> */}
      

      {/* <Hero /> */}
      

      <Filter />

      {/* <Room_Details /> */}
      {/* <h1>AAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <Rooms /> */}
      
    </div>
  );
}

export default Parent_of_hotel;
