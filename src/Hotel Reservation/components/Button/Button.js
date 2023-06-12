import "./Button.css";
import {AiOutlinePlus} from "react-icons/ai"//to add an icon

function Button(props) {
  return (
    <div className="">
      {/* <AiOutlinePlus /> */}
      <button>{props.content}</button>
    </div>
  );
}

export default Button;
