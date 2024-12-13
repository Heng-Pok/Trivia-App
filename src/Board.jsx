// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Board = ({ categoryData, onQuestionClick, disabledButtons }) => {
    // eslint-disable-next-line react/prop-types
    const subcategories = Object.keys(categoryData.subcategories);

    const [randomizedQuestions, setRandomizedQuestions] = useState([]);

    // Function to randomize questions
    const getRandomQuestions = () => {
        const newRandomizedQuestions = [];

        subcategories.forEach((sub) => {
            const questions = categoryData.subcategories[sub];

            // Shuffle the questions in the subcategory to pick 4 random ones for the score levels
            const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());

            // Add the shuffled questions to the new array, picking the top 4
            newRandomizedQuestions.push(shuffledQuestions.slice(0, 4));
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
