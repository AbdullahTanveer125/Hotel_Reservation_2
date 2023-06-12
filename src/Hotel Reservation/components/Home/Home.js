
import { Route, Routes } from "react-router-dom";
import Body from "../Body/Body";
import Feature_rooms from "../Feature of room/Feature_rooms";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

function Home() {
  return (
    <div className="">

      {/* <Header /> */}
      <Body />
      <Services />
      <Feature_rooms />
      {/* <Footer /> */}

      
    </div>
  );
}

export default Home;
