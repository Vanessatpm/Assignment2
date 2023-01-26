import TranslationForm from "../TranslationForm";
import withAuth from "../withAuth";

function TranslationPage() {
  return (
    <div>
      <h1>Translation Page</h1>
      <TranslationForm />
    </div>
  );
}

export default withAuth(TranslationPage);
