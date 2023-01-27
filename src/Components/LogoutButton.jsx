import { useDispatch } from "react-redux";
import { deleteUser } from "./State/userReducer";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(deleteUser());
    navigate("/login");
  }
  return (
    <div>
      <div>
        <button type="button" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default LogoutButton;
