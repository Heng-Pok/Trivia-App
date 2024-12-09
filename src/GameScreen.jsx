import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Board from "./Board";
import BoardPopUp from "./BoardPopUp";
import GameScreen_SubmitButton from "./GameScreen_SubmitButton.jsx";

const GameScreen = () => {
    const [questions, setQuestions] = useState({});
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState({});

    const location = useLocation();
    const { cardType } = location.state || {}; // Get the selected category

    // Fetch questions from the server
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("http://137.184.116.179:3000/questions");
                if (response.ok) {
                    const data = await response.json();
                    setQuestions(data);
                } else {
                    console.error("Failed to fetch questions");
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswer = (answer, rowIndex, colIndex) => {
        if (answer === selectedQuestion.question.correct) {
            setScore(score + selectedQuestion.question.points);
        }
        setDisabledButtons((prevState) => ({
            ...prevState,
            [`${rowIndex}-${colIndex}`]: true,
        }));

        setSelectedQuestion(null); // Close popup
    };

    const handleSubmit = () => {
        console.log(score);

        // Optional: send score to the server for saving
    };

    const categoryData = questions[cardType];

    return (
        <div className="game-screen">
            <h1>Category: {cardType}</h1>
            <h2>Score: {score}</h2>
            {categoryData ? (
                <Board
                    categoryData={categoryData}
                    onQuestionClick={(question, rowIndex, colIndex) =>
                        setSelectedQuestion({ question, rowIndex, colIndex })
                    }
                    disabledButtons={disabledButtons}
                />
            ) : (
                <p>Loading questions...</p>
            )}
            {selectedQuestion && (
                <BoardPopUp
                    questionData={selectedQuestion.question}
                    onAnswer={(answer) =>
                        handleAnswer(answer, selectedQuestion.rowIndex, selectedQuestion.colIndex)
                    }
                />
            )}
            <GameScreen_SubmitButton onSubmitClick={handleSubmit} />
        </div>
    );
};

export default GameScreen;