import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../Components/GoalForm";
import Spinner from "../Components/Spinner";
import { getGoals, reset } from "../Feature/goals/goalSlice";
import GoalItem from "../Components/GoalItem";



function Dashboard() {

	const navigate=useNavigate();
	const dispatch=useDispatch();


	const {goals, isLoading, isError, message}=useSelector(function(state){
		return state.goals;
	})


	const{user}=useSelector(function(state){
		return state.auth;
	})

	useEffect(function(){

		if(isError){
			console.log(message);
		}
		if(!user){
			navigate("/login")
		}

		dispatch(getGoals());

		return function(){dispatch(reset())}

	},[user, isError, message, navigate, dispatch])


	if(isLoading){
		return <Spinner />
	}



	return (
		<div>
			<section className="heading">
				<h1>Welcome to {user && user.name}</h1>
				<p>Goal Dashboard</p>
			</section>

			<GoalForm />

			<section className="content">
				{goals.length>0 ? (
					<div className="goals">
						{goals.map(function(goal){
							<GoalItem key={goal._id} goal={goal}/>
						})}
					</div>
				) : (<h3>You are not set any goal</h3>)}
			</section>


		</div>
	)
}

export default Dashboard;
