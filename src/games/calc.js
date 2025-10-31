export class CalcGame {
  #question
  #correctAnswer

  constructor() {
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)]

    this.#question = `Question: ${a} ${operator} ${b}`

    switch (operator) {
      case '+':
        this.#correctAnswer = a + b
        break
      case '-':
        this.#correctAnswer = a - b
        break
      case '*':
        this.#correctAnswer = a * b
        break
    }
  }

  getCorrectAnswer() {
    return this.#correctAnswer
  }

  getQuestion() {
    return this.#question
  }

  static getDescription() {
    return 'What is the result of the expression?'
  }
}
