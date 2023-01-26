import { useSelector } from "react-redux";

function TranslationsList() {
  const translations = useSelector((state) => state.user.translations);
  const translationsList = translations.map((translation) => {
    return <li>{translation}</li>;
  });

  return <ul>{translationsList}</ul>;
}

export default TranslationsList;
