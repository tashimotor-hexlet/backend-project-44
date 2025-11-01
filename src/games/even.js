const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = Math.floor(Math.random() * 100)
  return {
    question: `${number}`,
    correctAnswer: (number % 2 === 0) ? 'yes' : 'no',
  }
}

export default {
  getDescription,
  generateRound,
}
