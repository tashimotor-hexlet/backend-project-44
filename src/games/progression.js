const getDescription = () => 'What number is missing in the progression?'

const generateRound = () => {
  const length = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 20)
  const step = Math.floor(Math.random() * 10) + 1
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
