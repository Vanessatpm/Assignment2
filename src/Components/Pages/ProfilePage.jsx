import TranslationsList from "../TranslationsList";
import withAuth from "../withAuth";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* <TranslationsList /> */}
      <button>Delete</button>
    </div>
  );
}

export default withAuth(ProfilePage);
