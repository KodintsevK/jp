import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type  { Quiz } from "../types/quiz.types"

function QuizPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [current, setCurrent] = useState(0)
  const [answer, setAnswer] = useState("")

  useEffect(() => {
    if (!id) return

    fetch(`/api/quiz/${id}`)
      .then(res => res.json())
      .then((data : Quiz) => setQuiz(data))
  }, [id])

  if (!quiz) return <div>Loading...</div>

  const question = quiz.questions[current]

  const isLast = current === quiz.total_questions - 1

  const handleNext = async () => {
    // сохраняем ответ
    await fetch(`/api/quiz/question/${question.id}/answer`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answer: answer })
    })
    // setAnswers(prev => [...prev, answer])
    setAnswer("")

    if (isLast) {
      // конец квиза
      navigate(`/result/${quiz.session_id}`, {
        state: {
          questions: quiz.questions
        }
      })
      return
    }

    setCurrent(prev => prev + 1)
  }

  return (
    <div>
      <h2>
        Question {current + 1} / {quiz.total_questions}
      </h2>
      <p>
        { "█".repeat(current) } {"_".repeat(quiz.total_questions - (current)) } - { (current) / quiz.total_questions * 100 }% 
      </p>

      <h1>{question.symbol}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Введите ответ"
        />

        <button type="submit" disabled={!answer}>
          {isLast ? "Завершить" : "Далее"}
        </button>
      </form>
    </div>
  )
}

export default QuizPage