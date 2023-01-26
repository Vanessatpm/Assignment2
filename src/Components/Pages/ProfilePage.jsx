import withAuth from "../withAuth";
import TranslationsHistory from "../TranslationsHistory";
import LogoutButton from "../LogoutButton";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <TranslationsHistory />
      <LogoutButton />
    </div>
  );
}

export default withAuth(ProfilePage);
