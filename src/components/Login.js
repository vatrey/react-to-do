import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
    const navigate = useNavigate();

    let loginHandler = () => {
        localStorage.setItem("loginStatus", true);
        navigate("/to-do");
    };

    return (
        <div className="login">
            <button className="login-btn" onClick={loginHandler}>
                Login
            </button>
        </div>
    )
}

export default Login