const getDescription = () => 'What number is missing in the progression?'
const MIN_PROGRESSION_LENGTH = 5
const MAX_PROGRESSION_LENGTH = 10
const MAX_START = 20
const MIN_STEP = 1
const MAX_STEP = 10

const generateRound = () => {
  const length = Math.floor(Math.random() * (MAX_PROGRESSION_LENGTH - MIN_PROGRESSION_LENGTH + 1)) + MIN_PROGRESSION_LENGTH
  const start = Math.floor(Math.random() * MAX_START)
  const step = Math.floor(Math.random() * (MAX_STEP - MIN_STEP + 1)) + MIN_STEP
  const hiddenIndex = Math.floor(Math.random() * length)
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  const correctAnswer = progression[hiddenIndex].toString()
  progression[hiddenIndex] = '..'
  return {
    question: progression.join(' '),
    correctAnswer,
  }
}

export default {
  getDescription,
  generateRound,
}
