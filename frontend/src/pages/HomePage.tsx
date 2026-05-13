import { Link, useNavigate } from "react-router-dom"
import type { Quiz, QuizSession } from "../types/quiz.types"
import { useEffect, useState } from "react"

function HomePage() {
  const navigate = useNavigate()
  const [quizArray, setQuizArray] = useState<QuizSession[]>([])
  const [count, setCount] = useState<number>(10)
  const [quizType, setQuizType] = useState<number>(1)


  const startQuiz = async () => {
      const res = await fetch('/api/quiz', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ count: count, type: quizType })
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

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          startQuiz();
        }}>

        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Количество вопросов в квизе"
        />
        <select
          value={quizType}
          onChange={(e) => setQuizType(Number(e.target.value))}
        >
          <option value={1}>
            Хирагана
          </option>

          <option value={2}>
            Катакана
          </option>

          <option value={3}>
            Обе каны
          </option>
        </select>
        <button type="submit" disabled={!count}>Начать квиз</button>
      </form>

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