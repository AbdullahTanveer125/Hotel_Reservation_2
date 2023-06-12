import "./Service_box.css";

function Service_box(props) {
  return (
    <div className="service_box_parent">

      <div className="icon">{props.icon}</div>
      <h3>{props.heading}</h3>
      <p>{props.detail}</p>

    </div>
  );
}

export default Service_box;























// function Service_box() {
    //     return (
    //         <div className="">
    //             <div>
    //             <h1>Services</h1>
    //             <hr />
    //         </div>
            
    //         {
    //             serviceData.map(function (element){
    //                 <div key={element.id}>
    
    //                     <div>{element.icon}</div>
    //                     <h3>{element.heading}</h3>
    //                     <p>{element.detail}</p>
    
    //                 </div>
    //             })
    //         }
      
    //       </div>
    //     );
    //   }
      