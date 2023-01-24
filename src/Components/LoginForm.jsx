import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUser } from "./State/userReducer";

function LoginForm() {
  const [localUsername, setLocalUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLoginBtn() {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}?username=${localUsername}`)
      .then((response) => response.json())
      .then((results) => {
        // array with users with the username
        //Logger ut resultatet for å se hva man får
        console.log(results);
        //TODO: if result is an empty array: createUser and return the result of that call; else return one of the users?
        //TODO: remove stuff from reducer
      })
      .catch((error) => {
        //Logger ut error
        console.log(error);
      });
    //dispatch(getUser(localUsername));
    navigate("/");
  }
  function updateLocalUsername(event) {
    setLocalUsername(event.target.value);
  }

  return (
    <>
      <h4>{localUsername}</h4>
      <form onSubmit={handleLoginBtn}>
        <input type="text" onChange={updateLocalUsername} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
