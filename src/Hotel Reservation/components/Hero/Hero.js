import "./Hero.css";
import {AiOutlinePlus} from "react-icons/ai"//to add an icon

import image from "../../images/room4.jpg";
import Button from "../Button/Button";

function Hero(props) {
  return (
    <div className="hero_parent">
      {/* <AiOutlinePlus /> */}

      
      <img src={props.image} alt="Loading..." className="hero_image"/>


      <div className="hero_inner_container">
        
        <div>
            <h1 className="hero_heading">{props.hero_heading}</h1>
            <Button content={props.hero_button}/>
        </div>

      </div>

    </div>
  );
}

export default Hero;
