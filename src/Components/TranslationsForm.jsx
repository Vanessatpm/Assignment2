import TranslationsList from "./TranslationsList";
import { useSelector } from "react-redux";
import { createHeaders } from "../Api";

function TranslationsForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  //const userId;
  //const username = useSelector((state) => state.user.username);

  //   function deleteTranslations() {
  //     fetch(`${apiUrl}/${userId}`, {
  //       method: "PATCH",
  //       headers: createHeaders(),
  //       body: JSON.stringify({
  //         translations: [],
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         //Logger ut resultatet for å se hva man får
  //         console.log(result);
  //         return result;
  //       })
  //       //TODO: .then update redux state
  //       .catch((error) => {
  //         //Logger ut error
  //         console.log(error);
  //       });
  // }
  return (
    <div>
      <TranslationsList />
      {/* <button type="button" onClick={deleteTranslations}>
        Delete
      </button> */}
    </div>
  );
}

export default TranslationsForm;
