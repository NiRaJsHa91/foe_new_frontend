import "../Styles/Header2.css";
// import Logout from '../Logout/Logout';
// import { useAuth } from '../Context/AuthContext';
import { useUserContext } from "@/context/AuthContext";

const Header2 = () => {
    // const { user } = useAuth();
    const { user } = useUserContext();
    // console.log("User data:", user);

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logout clicked");
    };

    return (
        <div className="page-row header2 mt-20">
            <h3 className="hellohead" style={{ fontSize: '18px', fontWeight: 'normal', color: '#262525' }}>
                {user ? `Hello, ${user.userName}` : "Hello, Guest"}
            </h3>
            <h3 className="hellohead" style={{ fontSize: '18px', fontWeight: 'normal', color: '#262525' }}>
                {user ? `Continue, ${user.program.programName}` : "Continue as Guest"}
            </h3>
            <div className="logout-button">
                {/* If you want to add a logout icon instead of the Logout component, uncomment the following line */}
                {/* <a href="#" className="logout-icon ui-link" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                </a> */}
            </div>
            {/* Include the Logout component */}
            {/* <Logout /> */}
        </div>
    );
};

export default Header2;
