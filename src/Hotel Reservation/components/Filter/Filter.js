import "./Filter.css";
import { useEffect, useState } from "react";
import {GoTriangleUp} from "react-icons/go"//to add an icon
import {AiFillCaretDown} from "react-icons/ai"//to add an icon
import All_rooms_data from "../../Content Data/All_rooms_data";
import Online_rooms_data from "../../Content Data/Online_rooms_data";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Filter() {

    // min_price max_price price price_handler
    const min_price=0;
    const max_price=600;

    function price_handler(e){
        set_price(e.target.value)
        // console.log(price);
    }



    
    const [price, set_price]=useState(299);

    // const [pets_checkbox, set_pets_checkbox]=useState(false);
    // const [free_breakfast_checkbox, set_free_breakfast_checkbox]=useState(false);

    
    const [input_data_minimum, set_input_data_minimum]=useState("");
    const [input_data_maximum, set_input_data_maximum]=useState("");

    const [filter_hide_class_of_room, set_filter_hide_class_of_room]=useState("filter_hide");
    const [filter_hide_class_of_guest, set_filter_hide_class_of_guest]=useState("filter_hide");
    const [current_option_of_room, set_current_option_of_room]=useState("");
    const [current_option_of_guest, set_current_option_of_guest]=useState();
    const [filter_icon_of_guest, set_filter_icon_of_guest]=useState(false);
    const [filter_icon_of_room, set_filter_icon_of_room]=useState(false);
    
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);


    function add_data_minimum(e){
        set_input_data_minimum(e.target.value);
    }
    function add_data_maximum(e){
        set_input_data_maximum(e.target.value);
    }


    function show_filter_of_room(){
    set_filter_hide_class_of_room("filter_option_show");

    if(filter_icon_of_room){
        set_filter_icon_of_room(false);
        set_filter_hide_class_of_room("filter_hide");
    }else{
        set_filter_icon_of_room(true);
    }
    }

    function show_filter_of_guest(){
        set_filter_hide_class_of_guest("filter_option_show");
    
        if(filter_icon_of_guest){
            set_filter_icon_of_guest(false);
            set_filter_hide_class_of_guest("filter_hide");
        }else{
            set_filter_icon_of_guest(true);
        }
        }

    function single(){
        set_filter_icon_of_room(false);
        set_filter_hide_class_of_room("filter_hide");
        set_current_option_of_room("single");
    }

    function couple(){
        set_filter_icon_of_room(false);
        set_filter_hide_class_of_room("filter_hide");
        set_current_option_of_room("couple");
    }

    function family(){
        set_filter_icon_of_room(false);
        set_filter_hide_class_of_room("filter_hide");
        set_current_option_of_room("family");
    }

    function one(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("1");
    }

    function two(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("2");
    }

    function three(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("3");
    }

    function four(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("4");
    }

    function five(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("5");
    }

    function six(){
        set_filter_icon_of_guest(false);
        set_filter_hide_class_of_guest("filter_hide");
        set_current_option_of_guest("6");
    }


    const [update_rooms, setUpdateRooms] = useState([]);
    // const [update_rooms, setUpdateRooms] = useState([]);

    // useEffect(function(){
    //     let update = All_rooms_data.filter(function(element){
    //         console.log(current_option_of_guest, input_data_minimum, input_data_maximum);
            
    //       return (
    //         element.room_type === "Single" &&
    //         element.guest === current_option_of_guest &&
    //         element.rent === 299 &&
    //         element.size > input_data_minimum &&
    //         element.size < input_data_maximum &&
    //         element.pets === true &&
    //         element.free_breakfast === true

            
    //       );console.log(update);
    //     });
    //     console.log(current_option_of_guest, input_data_minimum, input_data_maximum);
    //     setUpdateRooms(update);
    //     console.log(update);
    //   }, [current_option_of_room, current_option_of_guest, price, input_data_minimum, input_data_maximum]);

    const filteredRooms = Online_rooms_data.filter(room => 
        room.room_type === current_option_of_room &&
        room.guest === current_option_of_guest &&
        room.rent <= price &&
        room.size > input_data_minimum &&
        room.size < input_data_maximum &&
        room.free_breakfast === isChecked1 &&
        room.pets === isChecked2
      );

      console.log("room_type=",current_option_of_room);
      console.log("guest",current_option_of_guest);
      console.log("price=",price);
      console.log("min=",input_data_minimum);
      console.log("max=",input_data_maximum);
      console.log("free breakfast checkbox=",isChecked1);
      console.log("pets checkbox=",isChecked2);
      console.log("Array=",filteredRooms);
      








    // const [update_rooms, setUpdateRooms] = useState([]);
    // useEffect(function(){
    //     let update = All_rooms_data.filter(function(element){
    //         return (
    //             element.room_type==="Single" && element.guest===current_option_of_guest && element.rent===299 && element.size>input_data_minimum && element.size<input_data_maximum && element.pets===true && element.free_breakfast===true
    //         )
    //     })
    //     setUpdateRooms(update);
        
    // },[current_option_of_room, current_option_of_guest, price, input_data_minimum, input_data_maximum])
    

    // const [update_rooms, setUpdateRooms] = useState([]);
    // useEffect(function(){
    //     let update = All_rooms_data.filter(function(element){
    //         return (
    //             element.room_type==="Single" && element.guest===1 && element.rent===299 && (element.size>input_data_minimum && element.size<input_data_maximum) && element.pets===true && element.free_breakfast===true
    //         )
    //     })
    //     setUpdateRooms(update);
        
    // },[current_option_of_room, current_option_of_guest, price, input_data_minimum, input_data_maximum])
    
    // const update_rooms = All_rooms_data.filter(function(element){
    //     return (
    //         element.room_type=={current_option_of_room} && element.guest=={current_option_of_guest} && element.rent<={price} && (element.size>input_data_minimum && element.size<input_data_maximum) && element.pets==true && element.free_breakfast==true
    //     )
    // })

//     const [update_rooms, setUpdateRooms] = useState([]);

//   useEffect(() => {
//     const filteredRooms = All_rooms_data.filter((element) => {
//       return (
//         element.room_type === current_option_of_room &&
//         element.guest === current_option_of_guest &&
//         element.rent <= 300 &&
//         element.size > input_data_minimum &&
//         element.size < input_data_maximum &&
//         element.pets === true &&
//         element.free_breakfast === true
//       );
//     });
//     setUpdateRooms(filteredRooms);
//   }, [
//     current_option_of_room,
//     current_option_of_guest,
//     price,
//     input_data_minimum,
//     input_data_maximum,
//   ]);


    // const update_rooms = All_rooms_data.filter(function(element){
    //     return (
    //         (element.room_type=="Single") && (element.guest=={current_option_of_guest}) && (element.rent<300) && (element.size>input_data_minimum && element.size<input_data_maximum) && (element.pets==true) && (element.free_breakfast==true)
    //     )
    // })

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    


  return (
    <div className="filter_parent">
      {/* <AiOutlinePlus /> */}

        {/* Room  Type */}
        <div className="filter_container">

            <h3>Room Type</h3>

            <div className="filter_show">
                <p>{current_option_of_room}</p>

                <div className="icons" onClick={show_filter_of_room}>
                {filter_icon_of_room ? (<GoTriangleUp  />) : 
                (  <AiFillCaretDown  />)}
                </div>
                
            </div>
            
            <div className={filter_hide_class_of_room}>
                <p onClick={single} className="sp"> single </p>
                <p onClick={couple} className="sp"> couple </p>
                <p onClick={family} className="sp"> family </p>
            </div>
        </div>

      
           {/* Guest */}
           <div className="filter_container">

                <h3>Guest</h3>

                <div className="filter_show">
                    <p>{current_option_of_guest}</p>

                    <div className="icons" onClick={show_filter_of_guest}>
                    {filter_icon_of_guest ? (<GoTriangleUp  />) : 
                    (  <AiFillCaretDown  />)}
                    </div>
                    
                </div>

                <div className={filter_hide_class_of_guest}>
                    <p onClick={one} className="sp"> 1 </p>
                    <p onClick={two} className="sp"> 2 </p>
                    <p onClick={three} className="sp"> 3 </p>
                    <p onClick={four} className="sp"> 4 </p>
                    <p onClick={five} className="sp"> 5 </p>
                    <p onClick={six} className="sp"> 6 </p>
                </div>
            </div>

        
        {/* **************** Rent/Price ****************** */}
        <div>
            <div>
                <p> Price= ${price} </p>
                <input type="range" name="price" min={min_price} max={max_price} id="price" value={price} onChange={price_handler} className="price_check"></input> 
            </div>
        </div>



            {/* Room Size */}
        <div className="room_size">
            <h3>Room Size</h3>
            <div className="limit_div">
                <input type="number" placeholder="✍️ minimum" value={input_data_minimum} onChange={add_data_minimum}/>
                <input type="number" placeholder="✍️ maximum" value={input_data_maximum} onChange={add_data_maximum}/>
            </div>
            
        </div>

        <div className="check_box_parent">

            <div className="check_box">
                <input
                type="checkbox"
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
                />
                <p>Break Fast</p>
            </div>

            <div className="check_box">
                <input
                type="checkbox"
                checked={isChecked2}
                onChange={() => setIsChecked2(!isChecked2)}
                />
                <p>Pets</p>
            </div>
            
        </div>






        {/* ************ Fiter room ************** */}

        <h1 className="after_filter_heading">Available Rooms After Filter</h1>

        {
        update_rooms.map(function (element){
            
            return (
                <div key={element.id} className="feature_room  available_room_after_Filter  feature_room_image-container">

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

export default Filter;
