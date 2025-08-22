import { useState,useCallback} from "react"
import questions from "../questions.js"
import Quastion from "./Quastion.jsx";
import Summary from "./Summary.jsx";
export default function Quiz(){
    const [userAnswers,setUserAnswers]=useState([]);
    const activeQuastionIndex= userAnswers.length;
    const quizIsCompleted= activeQuastionIndex===questions.length ;
const handleSelectAnswer=useCallback( 
    function  handleSelectAnswer(selectedAnswer){
      
    setUserAnswers((prevUserAnswer)=>{
       return [...prevUserAnswer,selectedAnswer]
    });
},[]) 
    const NotAnsweredQ=useCallback(()=> handleSelectAnswer(null),[handleSelectAnswer]);
        if(quizIsCompleted){
         return <Summary userAnswers={userAnswers}/>
        }
    return ( <div id="quiz">
       
        <Quastion
            key={activeQuastionIndex}
            index={activeQuastionIndex}
        handleOnSelect={handleSelectAnswer}
       onSkipAnswer ={NotAnsweredQ}
        />
        </div>)
}