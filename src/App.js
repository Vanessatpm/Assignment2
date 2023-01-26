import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import TranslationPage from "./Components/Pages/TranslationPage";
import ProfilePage from "./Components/Pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Lost in Translation</h1>
          <nav>
            <li>
              <NavLink to="/">Translation</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in as another user</NavLink>
            </li>
          </nav>
        </header>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
