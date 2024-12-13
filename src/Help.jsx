import React from "react";
import "./Help.css";

function Help() {
  const faqs = [
    {
      question: "What do I do when I enter the website?",
      answer: "When you enter the website for the first time, do sign up and create an account. Subsequently you can click on any of the main topics on the home screen and select with topic and which difficulty you would like to play.",
    },

    {
        question: "How do I play the game?",
        answer: "Select a topic among the 4 options available. After clicking on the topic card, you will be led to a screen with a grid full of numbers. The numbers represent the difficulty and points of the question and the subtopic is defined by the header of that column. Click on the difficulty level you desire for any of the four subtopics and answer the question. You will be led back to the grid after submitting the question and you will not be able to answer a question from that subtopic and difficulty any longer. Once you are satisfied that you have answered all the questions in the topic that selected, click on 'Submit Game', which will trigger an update of your score.",
    },
    {
      question: "Do I need to log in?",
      answer: "You can browse some parts of the site without logging in, but to save your scores and compete on the leaderboard, you need to create an account and log in.",
    },
    {
      question: "How can I see my score in relation to others?",
      answer: "After logging in, visit the leaderboard section to compare your scores with other players and see your rank on the global or country leaderboard.",
    },
  ];

  return (
    <div className="help">
        <div className="home-button">
            <a href="/">Home</a>
        </div>
      <h1 className="title">Help & Support</h1>

      <div className="faq">
        <h2 className="faqSubtitle">FAQs</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="listItem">
              <b>{faq.question}</b>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>


      <div className="faq">
        <h2 className="faqSubtitle">Useful Links</h2>
        <ul className = "unorderedList">
            <li className="listItem">
                <a href="/signup" className="helpLink">Sign Up</a>
            </li>
            <li className="listItem">
                <a href="/leaderboard" className="helpLink">Leaderboard</a>
            </li>
            <li className="listItem">
                <a href="/countryLeaderboard" className="helpLink">Country Leaderboard</a>
            </li> 
        </ul>
      </div>
    </div>
  );
}

export default Help;

