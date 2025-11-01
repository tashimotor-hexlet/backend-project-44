import readlineSync from 'readline-sync'

const greet = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  return name
}

const playGame = (game) => {
  const name = greet()

  console.log(game.getDescription())

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = game.generateRound()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export { greet, playGame }
