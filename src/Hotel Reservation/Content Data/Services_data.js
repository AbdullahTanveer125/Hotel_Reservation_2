import { color } from "framer-motion";
import {BsCupHotFill} from "react-icons/bs"//to add an icon
import {FaHiking} from "react-icons/fa"//to add an icon
import {FaShuttleVan} from "react-icons/fa"//to add an icon
import {IoIosBeer} from "react-icons/io"//to add an icon

    
export const ServiceData =[
        {
            id: 1 ,
            icon: <BsCupHotFill color="blue"/> ,
            heading: "Free Cocktails" ,

            detail: "A hotel is an establishment that provides paid lodging short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger." 
        },

        {
            id: 2 ,
            icon: <FaHiking color="green"/> ,
            heading: "Endless Hiking" ,

            detail: "A hotel is an establishment that provides paid lodging short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger."   
        },
        
        {
            id: 3 ,
            icon: <FaShuttleVan/> ,
            heading: "Free Shuttle Van" ,

            detail: "A hotel is an establishment that provides paid lodging short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger."   
        },
        
        {
            id: 4 ,
            icon: <IoIosBeer /> ,
            heading: "Strongest Beer" ,

            detail: "A hotel is an establishment that provides paid lodging short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger."   
        },
    ];
    export default ServiceData;