import { useState } from "react";
import { useForm } from "react-hook-form"



function TranslationForm(){
    const [translation, setTranslation] = useState();
    const { 
        register,
        handleSubmit,
        } = useForm();

    const onSubmit = ({ translation }) => {
        const charArray = translation.split('').map((char, index) =>{
            if(char === " "){
                return <span className="span_space">_________</span>
            } else { 
                const signChar = char.toLowerCase()
                const imgPath = "/img/" + signChar + ".png"
                console.log(imgPath)
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
        {translation && <p>{translation}</p>}

        </>


    )
}

export default TranslationForm

