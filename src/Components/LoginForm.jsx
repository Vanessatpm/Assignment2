import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAsync, getUserAsync, setUser } from "./State/userReducer";
import { createHeaders } from "../Api/index.js";
import { useForm } from "react-hook-form";

function LoginForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { register, handleSubmit } = useForm()
  const [loginUsername, setLoginUsername] = useState();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = async ( loginUsername ) => {
    setLoading(true)
    const userFound = dispatch(getUserAsync(loginUsername.username))
    .then((userFound) => {
      if(!userFound.payload){
        //Legge inn der hvor den brukeren skal lages 
       const newUser = dispatch(addUserAsync(loginUsername.username))
       console.log(newUser.payload)
       
      } 
      console.log(userFound.payload)
    })


      
      

  }

  function handleLoginBtn(loginUsername) {
    setLoading(true);
    console.log(loginUsername.loginName)
    fetch(`${apiUrl}?username=${loginUsername.loginName}S`)
      .then((response) => response.json())
      .then((users) => {
        // array with users with the username (0 or one user)
        console.log(loginUsername.loginName)


        if (users.length === 0) {
          // no user with that username
          console.log("user does not exist");
          const user = createUser();

          dispatch(
            setUser({
              id: user.id,
              username: user.username,
              translations: user.translations,
            })
          );
        } else {
          // the user with that username is in the API
          console.log("user exists");
          dispatch(
            setUser({
              id: users[0].id,
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
          username: loginUsername,
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

  return (
    <div>
      <p>{user.username}</p>
      <p>{loading && "Loading..."}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="loginUsername">Name here: </label>
        <input type="text" placeholder="Enter your username" {... register("username")}/>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default LoginForm;
