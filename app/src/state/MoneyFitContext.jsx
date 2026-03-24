/* eslint-disable react-refresh/only-export-components -- context + hook pattern */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getLang as getI18nLang, setLang as setI18nLang, t } from '../i18n.js'
import { calculateAnalysis } from '../data/calc.js'
import { QUESTIONS } from '../data/questions.js'

const MoneyFitContext = createContext(null)

export function MoneyFitProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return getI18nLang()
    } catch {
      return 'en'
    }
  })

  const [answers, setAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [analysis, setAnalysis] = useState(null) // { investorType, totalScore, mbti }
  const [toast, setToast] = useState(null)

  useEffect(() => {
    setI18nLang(lang)
  }, [lang])

  const showToast = useCallback((msg) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2500)
  }, [])

  const updateLang = useCallback((nextLang) => {
    setLangState(nextLang)
    setI18nLang(nextLang)
  }, [])

  const resetToHome = useCallback(() => {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setAnalysis(null)
  }, [])

  const selectAnswer = useCallback((questionKey, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: { value: option.value, score: option.score },
    }))
  }, [])

  const goNext = useCallback(() => {
    setCurrentQuestionIndex((idx) => Math.min(idx + 1, QUESTIONS.length - 1))
  }, [])

  const goBack = useCallback(() => {
    setCurrentQuestionIndex((idx) => Math.max(idx - 1, 0))
  }, [])

  const finish = useCallback((nextAnswers) => {
    const computed = calculateAnalysis(nextAnswers)
    setAnalysis(computed)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      isKorean: lang === 'ko',
      t,
      answers,
      currentQuestionIndex,
      totalQuestions: QUESTIONS.length,
      analysis,
      toast,
      showToast,
      updateLang,
      resetToHome,
      selectAnswer,
      goNext,
      goBack,
      finish,
    }),
    [
      lang,
      answers,
      currentQuestionIndex,
      analysis,
      toast,
      showToast,
      updateLang,
      resetToHome,
      selectAnswer,
      goNext,
      goBack,
      finish,
    ],
  )

  return <MoneyFitContext.Provider value={value}>{children}</MoneyFitContext.Provider>
}

export function useMoneyFit() {
  const ctx = useContext(MoneyFitContext)
  if (!ctx) throw new Error('useMoneyFit must be used within MoneyFitProvider')
  return ctx
}

