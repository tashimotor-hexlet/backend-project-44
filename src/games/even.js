export class EvenGame {
  #question
  #correctAnswer

  constructor() {
    const number = Math.floor(Math.random() * 100)
    this.#question = `Question: ${number}`
    this.#correctAnswer = (number % 2 === 0) ? 'yes' : 'no'
  }

  getCorrectAnswer() {
    return this.#correctAnswer
  }

  getQuestion() {
    return this.#question
  }

  static getDescription() {
    return 'Answer "yes" if the number is even, otherwise answer "no".'
  }
}
