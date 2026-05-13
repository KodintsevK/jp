import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { QuizResult } from "../types/quiz.types" 

function ResultPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quiz, setQuiz] = useState<QuizResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return 

    fetch(`/api/quiz/${id}/result`)
        .then(res => res.json())
        .then((data : QuizResult)  => setQuiz(data))
        .finally(() => {
          setLoading(false)
        })
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!quiz) {
    return (
      <div>
        <h1>No result data</h1>
        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1>Result</h1>

      <p>Quiz ID: {id}</p>
      <p>Score: {quiz.correct_answers} / {quiz.total_questions}</p>

      <div>
        {quiz.questions.map((question) => (
            <div key={question.id}>
              <h3>{question.symbol}</h3>

              <p>
                  Your answer: {question.user_answer || "—"}
              </p>

              <p>
                  Correct: {question.correct_answer}
              </p>

              <p>
                {question.is_correct === true && "✅"}

                {question.is_correct === false && "❌"}

                {question.is_correct === null && "—"}
              </p>
            </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>
        Restart
      </button>
    </div>
  )
}

export default ResultPage