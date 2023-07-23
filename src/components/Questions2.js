
import React, { useState } from 'react';
import '../Styles.css';

const Questions2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
        question: 'Which function is used to output text or data in the browsers console for debugging purposes?',
        options: ['alert()', 'console.log()', 'print()' , 'log()'],
        correctAnswer: 'console.log()',
      },
      {
        question: 'What is the result of the following expression in JavaScript: 10 + "5"?',
        options: ['15','105','"105"','Error'],
        correctAnswer: '"105"',
      },
      {
        question: 'Which method is used to add an element to the end of an array in JavaScript?',
        options: ['push()', 'add()', 'insert()', 'append()'],
        correctAnswer: 'push()',
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
      <div className='my-2'>Coding Quiz</div>
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

export default Questions2;




