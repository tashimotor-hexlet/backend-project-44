import readlineSync from 'readline-sync'

const greet = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  return name
}

const playGame = (gameClass) => {
  const name = greet()

  console.log(gameClass.getDescription())

  for (let i = 0; i < 3; i += 1) {
    const game = new gameClass()
    console.log(`Question: ${game.getQuestion()}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === game.getCorrectAnswer()) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.getCorrectAnswer()}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
}

export { greet, playGame }
