import TranslationsList from "./TranslationsList";
import { useSelector, useDispatch } from "react-redux";
import { createHeaders } from "../Api";
import { deleteTranslations as deleteTranslationsFromState } from "./State/userReducer";

function TranslationsHistory() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  function deleteTranslations() {
    // delete translations from API
    fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      //update translations in redux state:
      .then(dispatch(deleteTranslationsFromState()))
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <h2>Your last 10 translations:</h2>
      <TranslationsList />
      <button type="button" onClick={deleteTranslations}>
        Delete
      </button>
    </div>
  );
}

export default TranslationsHistory;
