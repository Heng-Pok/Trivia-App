import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import GameScreen from "./GameScreen.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/gamescreen" element={<GameScreen/>}/>
            </Routes>

            <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App
