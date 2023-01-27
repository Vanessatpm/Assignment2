import withAuth from "../withAuth";
import TranslationsList from "../TranslationsList";


function ProfilePage() {
  
  return (
    <div>
      <h1>Profile Page</h1>
      <TranslationsList />
    </div>
  );
}

export default withAuth(ProfilePage);
