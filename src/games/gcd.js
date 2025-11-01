export class GcdGame {
  #question
  #correctAnswer

  constructor() {
    const a = Math.floor(Math.random() * 100) + 1
    const b = Math.floor(Math.random() * 100) + 1

    this.#question = `Question: ${a} ${b}`

    this.#correctAnswer = this.calculateNod(a, b)
  }

  calculateNod(a, b) {
    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  getCorrectAnswer() {
    return this.#correctAnswer.toString()
  }

  getQuestion() {
    return this.#question
  }

  static getDescription() {
    return 'Find the greatest common divisor of given numbers.'
  }
}
