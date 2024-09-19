// import { getCurrentUser } from "@/lib/appwrite/api";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const fetchCurrentUser = async () => {
  const user = localStorage.getItem("user");
  console.log(user)
  // try {
  //   const response = await axios.get("https://dummyjson.com/auth/me", {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
  //     },
  //     withCredentials: true,
  //   });
  //   return response.data; // The response contains user details and the token
  // } catch (error) {
  //   console.error("Error fetching current user:", error);
  //   return null;
  // }
  // @ts-ignore
  return JSON.parse(user);
};

export const INITIAL_USER_ORGANISATION_STATE = {
  organizationId: "",
  organizationName: "",
  organizationAdminName: "",
  organizationAdminEmail: "",
  organizationAdminPhone: "",
};

export const INITIAL_USER_COHORT_STATE = {
    cohortId: "",
    cohortName: "",
  }

export const INITIAL_USER_PROGRAM_STATE = {
    programId: "",
    programName: "",
    programDesc: "",
  }

export const INITIAL_USER_STATE = {
  userId: "",
  userAddress: "",
  userEmail: "",
  userName: "",
  userPhoneNumber: "",
  organization: INITIAL_USER_ORGANISATION_STATE,
  cohort: INITIAL_USER_COHORT_STATE,
  program: INITIAL_USER_PROGRAM_STATE,
};

export const INITIAL_STATE = {
  user: INITIAL_USER_STATE,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false
};

const AuthContext = createContext(INITIAL_STATE);
// @ts-ignore
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(INITIAL_USER_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentUser = await fetchCurrentUser();

      if (currentUser) {
        // @ts-ignore
        setUser({
          userId: currentUser.userId,
          userAddress: currentUser.userAddress,
          userEmail: currentUser.userEmail,
          userName: currentUser.userName,
          userPhoneNumber: currentUser.userPhoneNumber,
          organization: currentUser.organization,
          cohort: currentUser.cohort,
          program: currentUser.program,
        });

        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      // console.log("error in checkAuth" + error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        userId: "user1@chippersage.com",
        userAddress: "Kundalahalli",
        userEmail: "user1@chippersage.com",
        userName: "Mamta",
        userPhoneNumber: "6301615610",
        organization: {
          organizationId: "Org_Chippersage",
          organizationName: "Chippersage",
          organizationAdminName: "Harikrishna",
          organizationAdminEmail: "support@thechippersage.com",
          organizationAdminPhone: "6301615610",
        },
        cohort: {
          cohortId: "Cht_Sep-24-Bhive",
          cohortName: "Sep-24-Bhive",
        },
        program: {
          programId: "Prg_EEA_1",
          programName: "EEA Level 1",
          programDesc:
            "This is the English Ever After Course to learn basic English concepts",
        },
      })
    );
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/sign-in");
    }
    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };
  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => useContext(AuthContext);