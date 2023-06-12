import { Link } from "react-router-dom";
import "./Header.css";

import logo2 from "../../images/logo2.png";

function Header() {
  return (
    <div className="header_parent">
      
      <div>
        <img src={logo2} alt="Loading...." className="logo"></img>
      </div>

      <div className="links">

        <Link to="/" className=""> Home </Link>
        <Link to="/Rooms" className=""> Rooms </Link>
        <Link to="/Feature_rooms" className=""> Feature </Link>
        <Link to="/Services" className=""> Services </Link>

        {/* <Link to='Feature' span={true} smooth={true} >Feature </Link> */}
        {/* <Link to='Feature' >Feature </Link> */}
            
            
            
          
      </div>


    </div>
  );
}

export default Header;
