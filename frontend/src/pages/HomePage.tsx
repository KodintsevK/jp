import { Link, useNavigate } from "react-router-dom"
import type { Quiz, QuizSession } from "../types/quiz.types"
import { useEffect, useState } from "react"

function HomePage() {
  const navigate = useNavigate()
  const [quizArray, setQuizArray] = useState<QuizSession[]>([])
  const [count, setCount] = useState<number>(10)

  const startQuiz = async () => {
      const res = await fetch('/api/quiz', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ count: count })
      })

      const data : Quiz = await res.json()

      navigate(`/quiz/${data.session_id}`)
  }

  useEffect(() => {
      fetch(`/api/quiz/`)
        .then(res => res.json())
        .then((data : QuizSession[]) => setQuizArray(data))
    }, 
  [])

  return (
    <div>
      <h1>Quiz App</h1>
      <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Количество вопросов в квизе"
        />
      <button onClick={startQuiz}>Начать квиз</button>
      <div>
          {
            quizArray.map(quiz=> (
              <div key={quiz.id}>
                <Link to={`/result/${quiz.id}`}>
                  Quiz {quiz.id} - Результат: {quiz.correct_answers} / {quiz.total_questions}
                </Link>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default HomePage