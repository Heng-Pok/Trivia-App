import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx"; // Ensure this path is correct
import MainPage from "./MainPage.jsx";
import Dummy from "./Dummy.jsx"
import SignupForm from "./SignupForm.jsx";
import GameScreen from "./GameScreen.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/gamescreen" element={<GameScreen/>}/>
    </Routes>
  );
}

export default App;