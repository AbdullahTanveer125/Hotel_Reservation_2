import Hero from "../Hero/Hero";
import "./Room_Details.css";
import {AiOutlinePlus} from "react-icons/ai"//to add an icon
import main from "../../images/room4.jpg";
import view1 from "../../images/room13.jpg";
import view2 from "../../images/room12.jpg";
import view3 from "../../images/room11.jpg";

function Room_Details() {
  return (
    <div className="room_details_parent">
      {/* <AiOutlinePlus /> */}

      <Hero image={main} hero_heading="Room Name" hero_button="Text Buton" />

        <div className="room_details_inner_container">
            <div className="image_view_container">
                <img src={view1} alt="Loading..." className="image_of_view"></img>
                <img src={view2} alt="Loading..." className="image_of_view"></img>
                <img src={view3} alt="Loading..." className="image_of_view"></img>
            </div>

            <div className="details_and_info">
                <div>
                    <h2>Details</h2>
                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities.</p>
                </div>

                <div>
                    <h2>Info</h2>
                    <p>Price : $500</p>
                    <p>Size : 300 SQFT</p>
                    <p>Max Capacity : 4 people</p>
                    <p>Pets : allow</p>
                    <p>Free breakfast : Included</p>
                </div>
            </div>


            <div>
                <h2>Extras</h2>
                                
                <div className="extra_info">  

                    <div>
                        <p>-TVs</p>
                        <p>-Sound systems</p>
                        <p>-Refrigerators</p>
                    </div>
                    <div>
                        <p>-Free Wi-Fi</p>
                        <p>-Mini-bars</p>
                    </div>
                    <div>
                        <p>-Coffee-makers</p>
                        <p>-Hairdryers</p>
                    </div>

                </div>
                
            </div>


        </div>
      


    </div>
  );
}

export default Room_Details;
