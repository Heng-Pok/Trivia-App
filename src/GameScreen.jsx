// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLocation} from "react-router-dom";

import Board from "./Board";
import BoardPopUp from "./BoardPopUp";
import TriviaData from "./TriviaData.js";

// eslint-disable-next-line react/prop-types
const GameScreen = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [score, setScore] = useState(0);

    const location = useLocation();
    const { cardType } = location.state || {}; // Get the selected category

    const handleAnswer = (answer) => {
        if (answer === selectedQuestion.correct) {
            setScore(score + selectedQuestion.points);
        }
        setSelectedQuestion(null); // Close popup
    };

    const categoryData = TriviaData[cardType];

    return (
        <div className="game-screen">
            <h1>Category: {cardType}</h1>
            <h2>Score: {score}</h2>
            <Board
                categoryData={categoryData}
                onQuestionClick={(question) => setSelectedQuestion(question)}
            />
            {selectedQuestion && (
                <BoardPopUp questionData={selectedQuestion} onAnswer={handleAnswer} />
            )}
        </div>
    );
};

export default GameScreen;
