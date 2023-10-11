import { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa';
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../Feature/auth/authSlice";
import Spinner from "../Components/Spinner";



function Register() {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	})

	const { name, email, password, password2 } = formData;

	const navigate=useNavigate();
	const dispatch=useDispatch();
	const {user, isLoading, isError, isSuccess, message}= useSelector(function(state){
		return state.auth
	});

	useEffect(function(){
		if(isError){
			toast.error(message);
		}

		if(isSuccess || user){
			navigate("/");
		}

		dispatch(reset());

	},[user, isError, isSuccess, message, navigate, dispatch])


	function onChange(e){
		setFormData(function(prevState) {
			console.log("***** prevState *****");
			console.log(prevState);
			console.log("***** prevState *****");
			return {
			  ...prevState,
			  [e.target.name]: e.target.value
			};
		  });
	}

	function onSubmit(e){
		e.preventDefault();

		if(password!==password2){
			toast.error("Password is nat match");
		}else{
			const userData={
				name,
				email,
				password
			}
			dispatch(register(userData));
		}
	}

	if(isLoading){
		return <Spinner />
	}

	return (
		<div>

			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>


			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={name}
							placeholder="Enter your name"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password2"
							name="password2"
							value={password2}
							placeholder="Confirm password"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-block"> Submit </button>
					</div>
				</form>
			</section>

		</div>
	)
}

export default Register;
