import { useLocation } from "react-router-dom";
// import { generateBoardData } from "./gameData"

function GameScreen() {

    const location = useLocation();
    const { cardType } = location.state || {}; // Safely retrieve state

    // const board = generateBoardData(cardType);

    return (
        <div className="GameScreen">
            <p>Clicked = {cardType}</p>
        </div>
    )


}

export default GameScreen

