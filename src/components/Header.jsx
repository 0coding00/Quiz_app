import quizLogo from "../assets/quiz-logo.png";
export default function Header(){
    return (
    <header>
            <img src={quizLogo} alt="quizLogo" />
            <h1>اختبار نسبة معرفتك بعائلتك</h1>
  </header>
    )
}