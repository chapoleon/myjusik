import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMoneyFit } from '../state/MoneyFitContext'
import { QUESTIONS } from '../data/questions.js'

export default function Quiz() {
  const navigate = useNavigate()
  const { t, answers, currentQuestionIndex, totalQuestions, selectAnswer, finish, goNext, goBack } = useMoneyFit()

  const q = QUESTIONS[currentQuestionIndex]
  const qTrans = t('questions')
  const qText = qTrans?.[currentQuestionIndex]

  const num = currentQuestionIndex + 1
  const pct = (num / totalQuestions) * 100

  const prev = answers[q.key]

  return (
    <div id="app">
      <section id="question" className="step active">
        <div className="container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>

          <div className="question-header">
            <span className="question-number">{`Q${num}/${totalQuestions}`}</span>
            <h2 className="question-title">{qText?.title}</h2>
            <p className="question-subtitle">{qText?.subtitle}</p>
          </div>

          <div className="options-grid" id="optionsGrid">
            {q.options.map((opt, idx) => {
              const selected = prev && prev.value === opt.value
              return (
                <button
                  key={opt.value}
                  className={`option-card ${selected ? 'selected' : ''}`}
                  type="button"
                  onClick={() => {
                    const nextAnswers = {
                      ...answers,
                      [q.key]: { value: opt.value, score: opt.score },
                    }
                    selectAnswer(q.key, opt)
                    window.setTimeout(() => {
                      if (currentQuestionIndex < totalQuestions - 1) {
                        goNext()
                        return
                      }
                      finish(nextAnswers)
                      navigate('/result')
                    }, 350)
                  }}
                >
                  <div className="option-icon">{opt.icon}</div>
                  <div className="option-text">
                    {qText?.options?.[idx]?.text}
                  </div>
                  <div className="option-desc">
                    {qText?.options?.[idx]?.desc}
                  </div>
                </button>
              )
            })}
          </div>

          <button
            className="btn-back"
            type="button"
            onClick={() => {
              if (currentQuestionIndex > 0) {
                goBack()
              } else {
                navigate('/')
              }
            }}
          >
            <i className="fas fa-arrow-left"></i> <span>{t('btn_back')}</span>
          </button>
        </div>
      </section>
    </div>
  )
}

