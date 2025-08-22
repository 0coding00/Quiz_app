import { useState } from "react"
import Answers from "./Answers..jsx"
import QuizTime from "./QuizTime.jsx"
import questions from "../questions.js"
export default function Quastion({handleOnSelect,onSkipAnswer,index}){
  const [answer,setAnswer]=useState({
    selectedAnswer:'',
    isCorrect:null
  })
  let timer=10000;
  if(answer.selectedAnswer){
    timer=1000;
  }
  if(answer.isCorrect != null){
    timer=2000;
  }
  
  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer : answer,
      isCorrect :null
    })
    setTimeout(() => {
      setAnswer({
        selectedAnswer : answer,
        isCorrect : questions[index].answers[0] === answer,
      })
      setTimeout(() => {
      handleOnSelect(answer)
      }, 2000);
    }, 1000);
  }
    let answerState='';
   if(answer.selectedAnswer && answer.isCorrect !==null){
    answerState= answer.isCorrect ? 'correct':'wrong';
   }
   else if(answer.selectedAnswer){
    answerState='answered'
   }
    return  <div id="question">
               <QuizTime Timeout={answer.selectedAnswer===''? onSkipAnswer : null} TIMER={timer} key={timer} mode={answerState}/>
            <p>{questions[index].text}</p>
           <Answers    
            answers={questions[index].answers}
             selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
             onSelect={handleSelectAnswer}
             />
           </div>
}