import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function withAuth(Component) {
  return function (props) {
    if (useSelector((state) => state.user.username) !== undefined) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
}

export default withAuth;
