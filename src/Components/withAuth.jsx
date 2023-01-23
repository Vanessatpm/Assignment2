import { Navigate } from "react-router-dom";

function withAuth(Component) {
    return function(props) {
        if (condition) {
            return <Component {...props}/>
        } else {
            return <Navigate to="/login"/>
        }
    }
}

export default withAuth;