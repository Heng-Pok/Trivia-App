// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Board = ({ categoryData, onQuestionClick }) => {

    // eslint-disable-next-line react/prop-types
    const subcategories = Object.keys(categoryData.subcategories);

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
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div key={rowIndex} className="row">
                    {subcategories.map((sub, colIndex) => {
                        // eslint-disable-next-line react/prop-types
                        const question = categoryData.subcategories[sub][rowIndex];
                        return question ? (
                            <button
                                key={colIndex}
                                onClick={() => onQuestionClick(question)}
                                className="question-btn"
                            >
                                {/* eslint-disable-next-line react/prop-types */}
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