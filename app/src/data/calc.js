import { QUESTIONS, TOTAL_QUESTIONS } from './questions.js'
import { INVESTOR_TYPE_DATA } from './investorTypes.js'

export function calcMbtiAxes(answers) {
  // Axis 1: S(Safe) vs R(Risk) — from loss_reaction + preference
  const riskScore = ((answers.loss_reaction?.score || 5) + (answers.preference?.score || 5)) / 2
  const axis1 = riskScore >= 5 ? 'R' : 'S'
  const axis1pct = Math.round(riskScore * 10)

  // Axis 2: T(short-Term) vs L(Long) — from horizon
  const horizonScore = answers.horizon?.score || 5
  const axis2 = horizonScore >= 5 ? 'L' : 'T'
  const axis2pct = Math.round(horizonScore * 10)

  // Axis 3: D(Dividend/income) vs G(Growth) — from goal
  const goalScore = answers.goal?.score || 5
  const axis3 = goalScore >= 5 ? 'G' : 'D'
  const axis3pct = Math.round(goalScore * 10)

  // Axis 4: N(Novice) vs E(Expert) — from knowledge + experience
  const expScore = ((answers.knowledge?.score || 5) + (answers.experience?.score || 5)) / 2
  const axis4 = expScore >= 5 ? 'E' : 'N'
  const axis4pct = Math.round(expScore * 10)

  return {
    code: axis1 + axis2 + axis3 + axis4,
    axes: [
      { letter: axis1, pct: axis1pct, leftKey: 'mbti_axis_safe', rightKey: 'mbti_axis_risk' },
      { letter: axis2, pct: axis2pct, leftKey: 'mbti_axis_short', rightKey: 'mbti_axis_long' },
      { letter: axis3, pct: axis3pct, leftKey: 'mbti_axis_dividend', rightKey: 'mbti_axis_growth' },
      { letter: axis4, pct: axis4pct, leftKey: 'mbti_axis_novice', rightKey: 'mbti_axis_expert' },
    ],
  }
}

export function calculateInvestorType(answers) {
  const totalScore = Object.values(answers).reduce((sum, a) => sum + (a?.score || 0), 0)
  const maxScore = TOTAL_QUESTIONS * 10
  const pct = Math.round((totalScore / maxScore) * 100)

  let type
  if (pct >= 70) type = 'aggressive_growth'
  else if (pct >= 55) type = 'growth'
  else if (pct >= 40) type = 'balanced'
  else if (pct >= 25) type = 'conservative'
  else type = 'very_conservative'

  // Basic sanity check against our mapping
  if (!INVESTOR_TYPE_DATA[type]) throw new Error(`Unknown investor type: ${type}`)

  return { type, totalScorePct: pct }
}

export function calculateAnalysis(answers) {
  const { type, totalScorePct } = calculateInvestorType(answers)
  return {
    investorType: type,
    totalScore: totalScorePct,
    mbti: calcMbtiAxes(answers),
  }
}

export function getScoreLabels(translationKeyByQuestionKey, answers) {
  return QUESTIONS.map((q) => {
    const a = answers[q.key]
    const s = a ? a.score : 0
    return { key: q.key, score: s, labelKey: translationKeyByQuestionKey[q.key] }
  })
}

