import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import { Audio } from 'react-loader-spinner'


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="pt-28 container mx-auto text-center flex items-center justify-center">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoutes;