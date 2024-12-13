import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Board = ({ categoryData, onQuestionClick, disabledButtons }) => {
    // eslint-disable-next-line react/prop-types
    const subcategories = Object.keys(categoryData.subcategories);

    const [randomizedQuestions, setRandomizedQuestions] = useState([]);

    // Function to randomize and organize questions by point values
    const getRandomQuestions = () => {
        const newRandomizedQuestions = [];

        subcategories.forEach((sub) => {
            const questions = categoryData.subcategories[sub];

            // Shuffle the questions in the subcategory
            const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());

            // Organize the shuffled questions by points (100, 200, 300, 400)
            const questionsByPoints = { 100: null, 200: null, 300: null, 400: null };

            // Assign one question from each point level
            shuffledQuestions.forEach((question) => {
                if (questionsByPoints[question.points] === null) {
                    questionsByPoints[question.points] = question;
                }
            });

            // Push the organized questions to the array
            newRandomizedQuestions.push([questionsByPoints[100], questionsByPoints[200], questionsByPoints[300], questionsByPoints[400]]);
        });

        setRandomizedQuestions(newRandomizedQuestions);
    };

    // Run the randomization when the component mounts
    useEffect(() => {
        getRandomQuestions();
    }, [categoryData]);

    return (
        <div className="board">
            {/* Subcategory Headers */}
            <div className="subcategory-row">
                {subcategories.map((sub, index) => (
                    <div key={index} className="subcategory">
                        {sub.charAt(0).toUpperCase() + sub.slice(1)}
                    </div>
                ))}
            </div>

            {/* Question Buttons */}
            {Array.from({ length: 4 }).map((_, rowIndex) => (
                <div key={rowIndex} className="row">
                    {subcategories.map((sub, colIndex) => {
                        const question = randomizedQuestions[colIndex] ? randomizedQuestions[colIndex][rowIndex] : null;
                        return question ? (
                            <button
                                key={colIndex}
                                onClick={() => onQuestionClick(question, rowIndex, colIndex)}
                                disabled={disabledButtons[`${rowIndex}-${colIndex}`]}
                                className="question-btn"
                            >
                                {question.points}
                            </button>
                        ) : (
                            <div key={colIndex} className="empty-cell" />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Board;
