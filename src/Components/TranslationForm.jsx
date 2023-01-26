import { useState } from "react";
import { useForm } from "react-hook-form"

function TranslationForm(){
    const [translation, setTranslation] = useState();
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translation }) => {
        const charArray = translation.split('').map((char, index) =>{
            if(char === " "){
                //Next word comes on the next line
                return <br/>
            } else { 
                const signChar = char.toLowerCase()
                const imgPath = "/img/" + signChar + ".png"
                return (
                    <img src={imgPath} alt={signChar} key={index + "-" + signChar} /> 
                    )
                }
        });
            setTranslation(charArray)        
            
    }


    return (

        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="translation"></label>
            <input type="text" placeholder="Your translation here" {... register("translation")} />
            <button type="submit">Translate</button>
        </form>

        <h3>Text to Sign Language: </h3>
        <p>{translation}</p>

        </>


    )
}

export default TranslationForm

