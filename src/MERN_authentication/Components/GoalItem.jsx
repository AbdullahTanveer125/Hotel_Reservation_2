import { useDispatch } from "react-redux";
import { deleteGoal } from "../Feature/goals/goalSlice";

function GoalItem({ goal }) {

    const dispatch= useDispatch()



    return (
        <div className='goal'>

            <div>
                {new Date(goal.createAt).toLocaleString("en-US")}
            </div>

            <h2>{goal.text}</h2>

            <button onClick={function(){dispatch(deleteGoal(goal._id))}} className="close">X</button>
        </div>
    )
}

export default GoalItem;