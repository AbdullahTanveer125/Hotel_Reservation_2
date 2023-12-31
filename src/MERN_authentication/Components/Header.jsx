import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../Feature/auth/authSlice';


function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(function (state) {
        return state.auth
    });


    function onLogout(){
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }



    return (

        <header className='header'>
            <div className="logo">
                <Link to="/"> Goal Setter </Link>
            </div>

            <ul>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="./login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="./register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )
                }

            </ul >


        </header >

    )
}

export default Header
