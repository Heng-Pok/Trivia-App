// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLocation} from "react-router-dom";

import Board from "./Board";
import BoardPopUp from "./BoardPopUp";
import GameScreen_SubmitButton from "./GameScreen_SubmitButton.jsx";
import TriviaData from "./triviaData.json";

// eslint-disable-next-line react/prop-types
const GameScreen = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState({});

    const location = useLocation();
    const {cardType} = location.state || {}; // Get the selected category

    // eslint-disable-next-line no-unused-vars
    const handleAnswer = (answer, rowIndex, colIndex) => {
        if (answer === selectedQuestion.correct) {
            setScore(score + selectedQuestion.points);
        }
        // Disable the button that was clicked
        setDisabledButtons((prevState) => (
            {...prevState, [`${rowIndex}-${colIndex}`]: true,})
        );

        setSelectedQuestion(null); // Close popup };
    }

    const handleSubmit = () => {
            console.log(score);

            // send score to users account on database?
    }

    const categoryData = TriviaData[cardType];

    return (
        <div className="game-screen">
            <h1>Category: {cardType}</h1>
            <h2>Score: {score}</h2>
            <Board
                categoryData={categoryData}
                onQuestionClick={(question, rowIndex, colIndex) => setSelectedQuestion({question, rowIndex, colIndex})}
                disabledButtons={disabledButtons} // Pass disabledButtons state to Board
            />
            {selectedQuestion && (
                <BoardPopUp questionData={selectedQuestion.question}
                            onAnswer={(answer) => handleAnswer(answer, selectedQuestion.rowIndex, selectedQuestion.colIndex)}
                />
            )}
            <GameScreen_SubmitButton
                onSubmitClick={handleSubmit}
            />
        </div>
    );
};

export default GameScreen;
