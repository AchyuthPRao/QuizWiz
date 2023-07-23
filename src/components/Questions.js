
import React, { useState } from 'react';
import '../Styles.css';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
        question: 'Which sport is often referred to as the gentlemans game?',
        options: ['Cricket', 'BasketBall', 'FootBall', 'Kabaddi'],
        correctAnswer: 'Cricket',
      },
      {
        question: 'What is the highest score one can achieve in a single turn in a game of bowling?',
        options: ['8', '99', '21', '10'],
        correctAnswer: '10',
      },
      {
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: ['India', 'Brazil (in Rio de Janeiro)', 'Pakistan(Lol)', 'Tokyo'],
        correctAnswer: 'Brazil (in Rio de Janeiro)',
      },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };
  const handleRestartQuiz = () => {
    // Reset the quiz and start again
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className='parent'>
    <div className='qcard'>
        <div className="children">
      <div className='my-2'>Sports Quiz</div>
      {quizCompleted ? ( 
        <div>
          <div>Quiz completed! Your score is {score} out of {questions.length}</div>
          <div className='container center'><button className='btn btn-dark mx-2' onClick={handleRestartQuiz}>Restart Quiz</button></div>
        </div>
      ) : (
        <div>
          <div className='my-2 container center'>{questions[currentQuestion].question}</div>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div className=' container center'><button className='btn btn-dark mx-2 pl-1' key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default Questions;




