import completedQuizImg from "../assets/quiz-complete.png"
import questions from "../questions.js"
export default function Summary({userAnswers}){
    let skippedAnswers=userAnswers.filter((answer) =>answer === null);
    let correctAnswers=userAnswers.filter((answer,index) =>answer === questions[index].answers[0]);
      let skippedAnswersShare=Math.round((skippedAnswers.length/userAnswers.length)*100);
      let correctAnswersShare=Math.round((correctAnswers.length/userAnswers.length)*100);
      let wrongAnswersShare=Math.round(((userAnswers.length-correctAnswers.length)/userAnswers.length)*100);
    return <div id='summary'>
            <img src={completedQuizImg} alt="completedQuizImg" /> 
            <h2>Test is finished</h2> 
            <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswersShare}%</span>
                <span className="text">Skipped Quastions</span>
            </p>
            <p>
                <span className="number">{correctAnswersShare}%</span>
                <span className="text">Correct Answers</span>
            </p>
            <p>
                <span className="number">{wrongAnswersShare}%</span>
                <span className="text">Wrong Answers</span>
            </p>
            </div>
            <ol>{
     userAnswers.map((answer,index) => {
        let cssClass='user-answer';
        if(answer === null){
            cssClass+=' skipped';
        }
        else if (answer === questions[index].answers[0] && answer !==null){
            cssClass+=' correct'
        }
        else {
            cssClass+=' wrong'
        }
         return   <li key={index}>
            <h3>{index + 1}</h3>
               <p className="question">{questions[index].text}</p> 
               <p className={cssClass}>{answer ? answer : 'Did not Answer'}</p> 
            </li>
                })
                }
           
            </ol>
    </div>
}