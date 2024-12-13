import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx"; // Ensure this path is correct
import MainPage from "./MainPage.jsx";
import SignupForm from "./SignupForm.jsx";
import GameScreen from "./GameScreen.jsx";
import {useState} from "react";
import LogoutButton from "./LogoutButton.jsx";

function App() {

    const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginForm setUser={setCurrentUser} />} />
      <Route path="/signup" element={<SignupForm setUser={setCurrentUser} />} />
      <Route path="/gamescreen" element={<GameScreen user={currentUser} />}/>
      <Route path="/" element={<LogoutButton setUser={setCurrentUser}/>}/>
    </Routes>
  );
}

export default App;
