import { useState } from "react";

function LoginForm() {
    const [userName, setUserName] = useState("unknown")

    function handleLoginBtn() {
        const apiUrl = 'https://youthful-woozy-meteorite.glitch.me/translations'

        fetch(`${apiUrl}?username=${userName}`)
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
    function updateUserName(event){
        setUserName(event.target.value)
    }

    return(
        <>
            <h4>{userName}</h4>
            <input type="text" onChange={updateUserName} />
            <button onClick={handleLoginBtn}>Submit</button>
        
        </>
    )
}