import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GameScreen() {
    const location = useLocation();
    const { cardType } = location.state || {};
   
    const navigate = useNavigate();
    
    //random qn dictionary for the different categories
    const questionsDict = {
        animal: [
            {
                question: "Which animal is known as the King of the Jungle?",
                options: ["Tiger", "Lion", "Elephant", "Leopard"],
                answer: "Lion",
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                answer: "Blue Whale",
            },
            {
                question: "How many legs does a spider have?",
                options: ["6", "8", "10", "12"],
                answer: "8",
            },
            {
                question: "Which bird is known for its colorful feathers and dancing?",
                options: ["Peacock", "Penguin", "Flamingo", "Eagle"],
                answer: "Peacock",
            },
            {
                question: "What type of animal is a Komodo dragon?",
                options: ["Lizard", "Snake", "Crocodile", "Turtle"],
                answer: "Lizard",
            },
        ],
        culture: [
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "South Korea", "Thailand"],
                answer: "Japan",
            },
            {
                question: "Which festival is known as the Festival of Lights?",
                options: ["Christmas", "Diwali", "Hanukkah", "Eid"],
                answer: "Diwali",
            },
            {
                question: "What is the traditional dress of Japan called?",
                options: ["Sari", "Kimono", "Hanbok", "Cheongsam"],
                answer: "Kimono",
            },
            {
                question: "In which country did the tango dance originate?",
                options: ["Spain", "Argentina", "Brazil", "Cuba"],
                answer: "Argentina",
            },
            {
                question: "Which famous painting is located in the Louvre Museum?",
                options: ["Starry Night", "The Scream", "Mona Lisa", "The Last Supper"],
                answer: "Mona Lisa",
            },
        ],
        history: [
            {
                question: "Who was the first President of the United States?",
                options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
                answer: "George Washington",
            },
            {
                question: "Which war was fought between the North and South regions in the United States?",
                options: ["World War I", "American Civil War", "Revolutionary War", "Cold War"],
                answer: "American Civil War",
            },
            {
                question: "What year did World War II end?",
                options: ["1940", "1945", "1950", "1939"],
                answer: "1945",
            },
            {
                question: "Who discovered America in 1492?",
                options: ["Christopher Columbus", "Ferdinand Magellan", "Leif Erikson", "Marco Polo"],
                answer: "Christopher Columbus",
            },
            {
                question: "What was the name of the ship that transported the Pilgrims to America in 1620?",
                options: ["Santa Maria", "Mayflower", "Beagle", "Endeavour"],
                answer: "Mayflower",
            },
        ],
        plant: [
            {
                question: "Which part of the plant conducts photosynthesis?",
                options: ["Root", "Stem", "Leaf", "Flower"],
                answer: "Leaf",
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                answer: "Carbon Dioxide",
            },
            {
                question: "What is the primary function of a plant's roots?",
                options: ["Photosynthesis", "Reproduction", "Water absorption", "Food storage"],
                answer: "Water absorption",
            },
            {
                question: "Which plant is known as the fastest-growing plant?",
                options: ["Cactus", "Bamboo", "Pine Tree", "Oak Tree"],
                answer: "Bamboo",
            },
            {
                question: "What is the scientific study of plants called?",
                options: ["Zoology", "Botany", "Ecology", "Horticulture"],
                answer: "Botany",
            },
        ],
    };
        //returns the random qs by using the shuffleArray method
        const getRandomQuestions = (questions, num) => {
            const shuffledQuestions = shuffleArray([...questions]);
            return shuffledQuestions.slice(0, num);
        };
        //slices the randomised array and asks the 3 qs
        const shuffleArray = (array) => {
            return array.sort(() => Math.random() - 0.5);
        };
    
        // getting all the qns and answers for a specific category
        const questions = questionsDict[cardType];
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedOption, setSelectedOption] = useState(null);
        const [score, setScore] = useState(0);
        const [quizFinished, setQuizFinished] = useState(false);
        const [randomizedQuestions, setRandomizedQuestions] = useState([]);
    
        
        useEffect(() => {
            const randomQuestions = getRandomQuestions(questions, 3);
            setRandomizedQuestions(randomQuestions);
            setCurrentQuestionIndex(0);
            setScore(0);
            setQuizFinished(false);
        }, [cardType]);
    
        // fetching first randomised qn
        const currentQuestion = randomizedQuestions[currentQuestionIndex];
    
        const handleOptionSelect = (option) => {
            setSelectedOption(option);
        };
    
        const handleNext = () => {
            // if u get it correct
            if (selectedOption === currentQuestion.answer) {
                setScore(score + 1);
            }
            //otherwise no score +1
            setSelectedOption(null); 
            //goes to the next qs
            if (currentQuestionIndex < randomizedQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // if quiz over
                setQuizFinished(true); 
            }
        };
    
        // back to home page
        const handleGoBack = () => {
            navigate("/"); 
        };
    
        return (
            <div>
                <h1>Quiz</h1>
                <p>Category: {cardType}</p>
        
                {!quizFinished ? (
                    // If the quiz is not finished
                    currentQuestion && (
                        <div>
                            
                            <p><b>Question {currentQuestionIndex + 1}:</b> {currentQuestion.question}</p>
                            <div>
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        //like a keylistener for this event;when the option is clicked it 
                                        //would select that as users answer
                                        onClick={() => handleOptionSelect(option)}
                                        className="option"
                                        //changes color when the option is selected to blue
                                        style={{
                                            backgroundColor: selectedOption === option ? "lightblue" : "white",
    
                                        }}
                                        //end of quiz
                                        disabled={quizFinished} 
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <button
                            //when they want to go on the next qs
                                onClick={handleNext}
                                disabled={selectedOption === null}
                                className="nextQuestion"
                            >
                                {currentQuestionIndex < randomizedQuestions.length - 1 ? "Next" : "Finish"}
                            </button>
                        </div>
                    ) 
                ) : (
                    
                    <div>
                        <p>Quiz finished! Your score: {score} / {randomizedQuestions.length}</p>
                        <button onClick={handleGoBack} className="goBack">
                            Go Back to Home
                        </button>
                    </div>
                )}
            </div>
        );
        
    }  
    export default GameScreen;
    