import "./Feature_rooms.css";
import React, { useState } from "react";

import Feature_Room_Data from "../../Content Data/Feature_rooms_data";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Feature_rooms() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="feature_room_parent" id="Feature">
      {/* <AiOutlinePlus /> */}

      <div className="feature_room_heading">
        <h1>Feature Rooms</h1>
      </div>

      
      <Link to="/Room_Details" className=""> 
        <Button content="See Details"/>
      </Link>
    
      {
        Feature_Room_Data.map(function (element){
            
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
  );
}

export default Feature_rooms;
