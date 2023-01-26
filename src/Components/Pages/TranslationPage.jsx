import TranslationForm from "../TranslationForm";
import withAuth from "../withAuth";

function TranslationPage() {
  return (
    <div>
      <h2>Translation page</h2>
      <TranslationForm />
    </div>
  );
}

export default withAuth(TranslationPage);
