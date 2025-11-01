export class ProgressionGame {
  #question
  #correctAnswer

  constructor() {
    const length = Math.floor(Math.random() * 6) + 5 // длина прогрессии от 5 до 10
    const start = Math.floor(Math.random() * 20) // случайное начальное число
    const step = Math.floor(Math.random() * 10) + 1 // случайный шаг прогрессии от 1 до 10
    const hiddenIndex = Math.floor(Math.random() * length) // индекс скрытого элемента
    const progression = []

    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step)
    }
    this.#correctAnswer = progression[hiddenIndex].toString()
    progression[hiddenIndex] = '..'
    this.#question = `Question: ${progression.join(' ')}`
  }

  getCorrectAnswer() {
    return this.#correctAnswer
  }

  getQuestion() {
    return this.#question
  }

  static getDescription() {
    return 'What number is missing in the progression?'
  }
}
