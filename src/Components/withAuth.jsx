import { Navigate } from "react-router-dom";

function withAuth(Component) {
    return function(props) {
        if (localStorage.getItem("username") != null) {
            return <Component {...props}/>
        } else {
            return <Navigate to="/login"/>
        }
    }
}

export default withAuth;