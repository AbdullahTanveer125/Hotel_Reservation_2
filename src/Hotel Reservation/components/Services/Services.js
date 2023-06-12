import "./Services.css";
import Service_box from "./Service_box/Service_box";
import  { ServiceData } from "../../Content Data/Services_data";


function Services() {
  return (
    <div className="services_parent">

      <div className="heading">
        <h1>Services</h1>
      </div>

      <div className="boxes_container">
        {ServiceData.map(function (element){

          return (
            <div key={element.id} className="box">
                <Service_box icon={element.icon} heading={element.heading} detail={element.detail}/>
            </div>
          );
        })
        }
      </div>


    </div>
  );
}

export default Services;
