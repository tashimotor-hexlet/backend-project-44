const getDescription = () => 'What is the result of the expression?'

const generateRound = () => {
  const a = Math.floor(Math.random() * 100)
  const b = Math.floor(Math.random() * 100)
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)]
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
  }
  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: correctAnswer.toString(),
  }
}

export default {
  getDescription,
  generateRound,
}
