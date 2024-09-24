import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { auth, db } from "../Firebase/FirebaseConfig";
// import { useAuth } from "../Context/AuthContext";
import { useUserContext } from "../../context/AuthContext";
import logo from "../../assets/Img/main-logo.png";
import "../../Styles/Login.css";
import axios from "axios";

const LoginForm = () => {
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();
  // const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem("token");
    const currentSession  = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
      },
      withCredentials: true,
    });

    if(currentSession.data) {
      if (currentSession.data.email === email) {
        navigate("/")
        // return toast({ title: "Oops!, You are already logged in" }); 
        console.log("Oops!, You are already logged in");      
    }else{
      localStorage.removeItem("token");
      // toast({ title: "You are logged out from previous account" });
      console.log("You are logged out from previous account");
    }

    try {
      const login = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      })

      if(!login.data) {
        // return toast({
        //   variant: "destructive",
        //   title: "Oops!, Invalid email or password, or Account does'nt exist",
        //   className:
        //     "bg-danger-red font-semibold p-3 w-fit h-fit fixed right-10 bottom-10 ml-10",
        // });
        console.log(
          "Oops!, Invalid email or password, or Account does'nt exist"
        );
      }

      localStorage.setItem("token", login.data.token);
      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        // form.reset();
        // toast({
        //   title: "Signin Successful!",
        //   className:
        //     "bg-success-green text-xs sm:text-lg font-semibold w-fit h-fit p-3 fixed right-10 bottom-10",
        //   duration: 3000,
        // });
        console.log("Signin Successful!");
        navigate("/");
      } else
        // toast({
        //   title: "Oops!, Login failed. Please try again.",
        //   className:
        //     "bg-danger-red font-semibold p-3 w-fit h-fit fixed right-10 bottom-10 ml-10",
        // });
        console.log( "Oops!, Login failed. Please try again." );
    }catch (error) {
      console.log(error);
    }finally {
      setIsSubmitting(false);
    }
}};

  const canSubmit = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="main_login ">
      <div className="login_card">
        <div className="login-card-body">
          <div className="login-img-div">
            <img src={logo} alt="Logo" />
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <h2 className="login-main_heading"> LogIn</h2>
            <div className="login-position-relative">
              <input
                type="email"
                id="login_email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span
                className="info-icon"
                data-tooltip="The email that you used during the sign up process."
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
            </div>
            <div className="login-position-relative">
              <input
                type={showPassword ? "text" : "password"}
                id="login_password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="info-icon"
                data-tooltip="Your password must be at least 8 characters long."
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <span
                className="login-eye-toggle-password"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            {error && <div className="text-danger text-center">{error}</div>}
            <div className="login-button-main">
              <button
                type="submit"
                className="login-btn-sub"
                disabled={!canSubmit || isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
            {/* <div className="login-forgot-password">
              <a onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </a>
            </div> */}
            {/* <div className="login-sign-up-text">
              <p>
                <a onClick={() => navigate("/signUp")}>&nbsp;SignUp</a>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
