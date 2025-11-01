export class PrimeGame {
  #question
  #correctAnswer

  constructor() {
    const number = Math.floor(Math.random() * 100) + 2 // случайное число от 2 до 101
    this.#question = `Question: ${number}`
    this.#correctAnswer = this.isPrime(number) ? 'yes' : 'no'
  }

  isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false
    }
    return true
  }

  getCorrectAnswer() {
    return this.#correctAnswer
  }

  getQuestion() {
    return this.#question
  }

  static getDescription() {
    return 'Is the given number prime? Answer "yes" or "no".'
  }
}
