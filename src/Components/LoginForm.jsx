import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("unknown")

    function handleLoginBtn() {
        const apiUrl = 'https://youthful-woozy-meteorite.glitch.me/translations'

        fetch(`${apiUrl}?username=${username}`)
            .then(response => response.json())
            .then(results => {
                //Logger ut resultatet for å se hva man får 
                console.log(results)
            })
            .catch(error => {
                //Logger ut error 
                console.log(error)
            })
    }
    function updateUsername(event){
        setUsername(event.target.value)
    }

    return(
        <>
            <h4>{username}</h4>
            <input type="text" onChange={updateUsername} />
            <button onClick={handleLoginBtn}>Submit</button>
        
        </>
    )
}