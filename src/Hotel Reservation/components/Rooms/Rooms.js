// import "./Rooms.css";
// import {AiOutlinePlus} from "react-icons/ai"//to add an icon

// import room2 from "../../images/room2.jpg";
// import Hero from "../Hero/Hero";
// import  { All_rooms_data } from "../../Content Data/All_rooms_data";
// import Service_box from "../Services/Service_box/Service_box";
// import { useState } from "react";

// function Rooms() {

//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };


//   return (
//     <div className="">
//       {/* <AiOutlinePlus /> */}

//       <Hero image={room2} hero_heading="Our Deluxe Rooms" hero_button="BACK TO HOME"/>

//       <h1>Search Rooms</h1>

//       <div>
//         <h1>AAAAAAAAAAAAAAAAAAAAA</h1>
//       </div>

//       <div className="feature_room_parent">
//         {
//           All_rooms_data.map(function (element){
//             return (
//               <div key={element.id}>

//                 <img src={element.image} alt="Loading..." className="image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                    
//                   <div className="feature_room_rent">
//                       <p>{element.rent}</p>
//                       <p className="feature_room_per_night">per night</p>
//                   </div>

//                   <h3 className="feature_room_name">{element.heading}</h3> 

//                   {isHovered && (
//                     <div className="feature_room_overlay-container">
//                       <div className="feature_room_overlay-text">
//                         <h3>Text Overlay</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                     </div>
//                   )}

//               </div>
//             );
//           })
//         }
//       </div>

//     </div>
//   );
// }

// export default Rooms;

import "./Rooms.css";
import React, { useState } from "react";

import {AiOutlinePlus} from "react-icons/ai"//to add an icon
import room2 from "../../images/room2.jpg";
import Hero from "../Hero/Hero";
import All_rooms_data from "../../Content Data/All_rooms_data";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Rooms() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="feature_room_parent">
      {/* <AiOutlinePlus /> */}
      
      <Hero image={room2} hero_heading="ALL Available Rooms" hero_button="BACK TO HOME"/>

      <div className="feature_room_heading">
        <h1>Rooms</h1>
      </div>

      
      <Link to="/Room_Details" className=""> 
        <Button content="See Details"/>
      </Link>


    
    <div className="all_present_rooms">
      {
        All_rooms_data.map(function (element){
            
            return (
                <div key={element.id} className="feature_room  feature_room_image-container">

                    <img src={element.image} alt="Loading..." className="image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                    
                    <div className="feature_room_rent">
                        <p>{element.rent}</p>
                        <p className="feature_room_per_night">per night</p>
                    </div>

                    <h3 className="feature_room_name">{element.heading}</h3> 

                    {isHovered && (
                      <div className="feature_room_overlay-container">
                        <div className="feature_room_overlay-text">
                          {/* <h3>Text Overlay</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                          <Link to="/Room_Details" className=""> 
                            <Button content="See Details"/>
                          </Link>
                          {/* <Button content="See Details"/> */}
                        </div>
                      </div>
                    )}

                </div>
            );
        })
      }

    </div>

      
    </div>
  );
}

export default Rooms; 
