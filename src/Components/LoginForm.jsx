import { useState } from "react";
import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router";
import { getUser } from "./State/userReducer";

function LoginForm() {
    const [localUsername, setLocalUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleLoginBtn() {
        dispatch(getUser(localUsername));
        navigate("/");
    }
    function updateLocalUsername(event){
        setLocalUsername(event.target.value);
    }

    return(
        <>
            <h4>{localUsername}</h4>
            <form onSubmit={handleLoginBtn}>
                <input type="text" onChange={updateLocalUsername} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm;