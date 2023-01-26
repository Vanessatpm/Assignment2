import TranslationsList from "./TranslationsList";
import { useSelector, useDispatch } from "react-redux";
import { createHeaders } from "../Api";
import { deleteTranslations as deleteTranslationsFromState } from "./State/userReducer";

function TranslationsForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  function deleteTranslations() {
    fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        //Logger ut resultatet for å se hva man får
        console.log(result);
        return result;
      })
      //update redux state:
      .then(dispatch(deleteTranslationsFromState()))
      .catch((error) => {
        //Logger ut error
        console.log(error);
      });
  }
  return (
    <div>
      <TranslationsList />
      <button type="button" onClick={deleteTranslations}>
        Delete
      </button>
    </div>
  );
}

export default TranslationsForm;
