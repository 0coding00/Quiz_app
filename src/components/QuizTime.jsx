import { useEffect ,useState} from "react"
export default function QuizTime({TIMER,Timeout,mode}){
 const [remainingTime,setRemainingTime]=useState(TIMER);
        useEffect(()=>{
            console.log('set timer')
          const timeout=  setTimeout(Timeout,TIMER)
            return ()=>{
                clearTimeout(timeout);
            }
            },[Timeout,TIMER])
            useEffect(()=>{
                console.log("set interval")
             const interval= setInterval(()=>{
               setRemainingTime((prevTime)=>prevTime-100)},100);
                return()=>{
                    clearInterval(interval);
                } 
            },[])
    return <progress value={remainingTime} max={TIMER} id="question-time" className={mode}/>
}