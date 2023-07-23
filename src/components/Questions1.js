
import React, { useState } from 'react';
import '../Styles.css';

const Questions1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
        question: 'What is the capital city of Japan?',
        options: ['Beijing', 'Tokyo', 'Seoul' , 'Bangkok'],
        correctAnswer: 'Tokyo',
      },
      {
        question: 'What is the chemical symbol for the element oxygen?',
        options: ['O','Ox','Oxg','Oh'],
        correctAnswer: 'O',
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
        correctAnswer: 'William Shakespeare',
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
      <div className='my-2'>General Trivia</div>
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

export default Questions1;




