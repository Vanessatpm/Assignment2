import { useSelector } from "react-redux";

function TranslationsList() {
  const translations = useSelector((state) => state.user.translations);
  const translationsList = translations.map((translation) => {
    <div>{translation}</div>;
  });

  return <div>{translationsList}</div>;
}

export default TranslationsList;
