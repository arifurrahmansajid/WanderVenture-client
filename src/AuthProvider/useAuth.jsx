import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
    const currenUserInfo = useContext(AuthContext)
    return currenUserInfo
};

export default useAuth;