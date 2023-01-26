import withAuth from "../withAuth";
import TranslationsHistory from "../TranslationsHistory";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <TranslationsHistory />
    </div>
  );
}

export default withAuth(ProfilePage);
