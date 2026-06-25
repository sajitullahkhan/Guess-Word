import { useEffect, useState } from "react"
import Display from "./components/Display.jsx"
import Header from "./components/Header.jsx"
import Keybord from "./components/Keybord.jsx"
import Progrems from "./components/Programs.jsx"
import { generate } from "random-words"

function App() {
  const [later, setLater] = useState([])
  const [randomWord, setRandomWord] = useState()
  useEffect(() => setRandomWord(generate()), [])

  useEffect(() => {
    if (randomWord) setLater(randomWord.toUpperCase().split(''))
  }, [randomWord])

  const [correct, setCorrect] = useState([])
  const [wrong, setWrong] = useState([])

  function match(value) {
    const isCorrect = later.includes(value)

    if (isCorrect) {
      setCorrect(prev => [...new Set([...prev, value])])
    } else {
      setWrong(prev => [...new Set([...prev, value])])
    }
  }
  function getColor(letter) {
    if (correct.includes(letter)) return 'bg-green-500'
    if (wrong.includes(letter)) { return 'bg-red-500' }
    return 'bg-yellow-500'
  }

  function newGame() {
    const generated = generate()
    setRandomWord(generated)
    setLater(generated.toUpperCase().split(''))
    setCorrect([])
    setWrong([])
  }
  function endGame() {
    if (wrong.length > 8) {
      return <h1 className="text-4xl text-center mt-16 text-red-500">You Lose</h1>
    } else if (correct.length === later.length) {
      return <h1 className="text-4xl text-center mt-16 text-green-500">You Win</h1>
    }

  }

  return (
    <>
      <Header />
      <Progrems wrong={wrong} />
      <Display later={later} correct={correct} />
      <Keybord match={match} correct={correct} wrong={wrong} newGame={newGame} getColor={getColor} />
      {endGame()}
    </>
  )
}

export default App
