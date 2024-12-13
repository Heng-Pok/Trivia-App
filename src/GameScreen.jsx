// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Board from "./Board";
import BoardPopUp from "./BoardPopUp";
import GameScreen_SubmitButton from "./GameScreen_SubmitButton.jsx";

const GameScreen = ( {user} ) => {
    const [questions, setQuestions] = useState({});
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [disabledButtons, setDisabledButtons] = useState({});

    const [username, setUsername] = useState(null)

    const location = useLocation();
    const navigate = useNavigate();
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

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await fetch (`http://137.184.116.179:3000/username?email=${encodeURIComponent(user)}`);

                if (response.ok) {
                    const username = await response.text();
                    setUsername(username)
                } else {
                    console.log(user)
                    console.error("Failed to fetch username");
                }

            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchUsername()
    }, []);

    const handleAnswer = (answer, rowIndex, colIndex) => {
        if (answer === selectedQuestion.question.correct) {
           // console.log("selectedQuestion:" , selectedQuestion);
            setScore(score + selectedQuestion.question.points);
            //console.log("selectedQuestion.question:", selectedQuestion.question);
            console.log("selectedQuestion.question.points:", selectedQuestion.question.points);
        }
        setDisabledButtons((prevState) => ({
            ...prevState,
            [`${rowIndex}-${colIndex}`]: true,
        }));

        setSelectedQuestion(null); // Close popup
    };

    const handleSubmit = async(e) => {
       
        e.preventDefault();

        try {
            const response = await fetch("http://137.184.116.179:3000/uploadScore", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    score: score
                }),
            });

            if (response.ok) {
                navigate('/');
                alert("Score saved successfully!");
            } else {
                const error = await response.json();
                alert(error.error || "Failed to save score");
            }

        } catch (error) {
            console.error("Error during score saving", error);
        }
    }

    const categoryData = questions[cardType];

    return (
        <div className="game-screen">
            <h1>Category: {cardType}</h1>
            {username ? <p>Logged in as: {username}</p> : <p>Please log in or sign up.</p>}
            <h2>Score: {score}</h2>
            {categoryData ? (
                <Board
                    categoryData={categoryData}
                    onQuestionClick={(question, rowIndex, colIndex) => {
                       // console.log("question:", question);
                        setSelectedQuestion({ question, rowIndex, colIndex })}
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
