import quizLogo from "../assets/quiz-logo.png";
export default function Header(){
    return (
    <header>
            <img src={quizLogo} alt="quizLogo" />
            <h1>Test your self</h1>
  </header>
    )
}