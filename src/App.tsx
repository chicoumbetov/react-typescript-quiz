import * as React from 'react';
import { fetchQuizQuestions, QuestionState } from './API';
//Components
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
//Types
import { Difficulty} from './API';
import { isConstructorTypeNode } from 'typescript';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  //Declare multiple state variables
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  //console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {


  }

  return (
    <div className='App'>
      <h1>REACT QUIZ</h1>

      {/*This will appear only when it's game over */}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
        Start
        </button>
      ) : null }
      
      <p className="score"> Score:</p>
      <p>Loading Questions ...</p>
      {/*<QuestionCard 
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
      />*/}
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;