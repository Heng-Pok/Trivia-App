// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const BoardPopUp = ({ questionData, onAnswer }) => {
    return (
        <div className="popup">
            {/* eslint-disable-next-line react/prop-types */}
            <h2>{questionData.question}</h2>
            <div className="answers">
                {/* eslint-disable-next-line react/prop-types */}
                {questionData.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BoardPopUp;
