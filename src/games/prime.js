const getDescription = () => 'Is the given number prime? Answer "yes" or "no".'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 2
  return {
    question: `${number}`,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  }
}

export default {
  getDescription,
  generateRound,
}
