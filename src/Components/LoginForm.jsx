import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./State/userReducer";
import { createHeaders } from "../Api/index.js";

function LoginForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [localUsername, setLocalUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLoginBtn() {
    console.log("handleLoginbtn");
    fetch(`${apiUrl}?username=${localUsername}`)
      .then((response) => response.json())
      .then((users) => {
        // array with users with the username (0 or one user)

        //Logger ut resultatet for å se hva man får
        console.log(users);

        if (users.length === 0) {
          // no user with that username
          const user = createUser();
          console.log(user);
          dispatch(
            setUser({
              username: user.username,
              translations: user.translations,
            })
          );
        } else {
          // the user with that username is in the API
          dispatch(
            setUser({
              username: users[0].username,
              translations: users[0].translations,
            })
          );
        }
      })
      .then(() => {
        // navigate to translation page:
        navigate("/");
      })
      .catch((error) => {
        //Logger ut error
        console.log(error);
      });

    function createUser() {
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: createHeaders(),
        body: JSON.stringify({
          username: localUsername,
          translations: [],
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          //Logger ut resultatet for å se hva man får
          console.log(user);
          return user;
        })
        .catch((error) => {
          //Logger ut error
          console.log(error);
        });
    }
  }

  function updateLocalUsername(event) {
    setLocalUsername(event.target.value);
  }

  return (
    <div>
      <h4>{localUsername}</h4>
      <form>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={updateLocalUsername}
        />
        <button type="button" onClick={handleLoginBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
