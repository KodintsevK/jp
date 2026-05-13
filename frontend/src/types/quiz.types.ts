// тип вопроса в квизе
interface QuizQuestion {
    id: number
    order: number
    symbol: string
    question_type: string
}

// тип вопроса в статистике
interface QuizResultQuestion extends QuizQuestion {
    correct_answer: string                             // правильный ответ, в базе
    user_answer: string | null                         // как ответил пользователь
    is_correct: boolean  | null                        // засчитан ли ответ
}

// тип квиза
interface Quiz {
    session_id: number
    total_questions: number
    questions: QuizQuestion[]
}

// тип статистики квиза
interface QuizResult {
    session_id: number
    total_questions: number
    correct_answers: number
    wrong_answers: number
    accuracy: number
    questions: QuizResultQuestion[]
}

interface QuizSession {
    id: number
    total_questions: number
    correct_answers: number
    createdAt: string
    updatedAt: string

}

export type { Quiz, QuizResult, QuizResultQuestion, QuizQuestion, QuizSession }
