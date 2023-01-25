import withAuth from "../withAuth";
import TranslationsForm from "../TranslationsForm";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <TranslationsForm />
    </div>
  );
}

export default withAuth(ProfilePage);
