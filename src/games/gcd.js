const getDescription = () => 'Find the greatest common divisor of given numbers.'

const calculateNod = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const a = Math.floor(Math.random() * 100) + 1
  const b = Math.floor(Math.random() * 100) + 1
  return {
    question: `${a} ${b}`,
    correctAnswer: calculateNod(a, b).toString(),
  }
}

export default {
  getDescription,
  generateRound,
}
