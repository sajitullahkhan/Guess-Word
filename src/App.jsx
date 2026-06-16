import { useState } from "react"
import Display from "./components/Display.jsx"
import Header from "./components/Header.jsx"
import Keybord from "./components/Keybord.jsx"
import Progrems from "./components/Programs.jsx"

function App() {
  const [word, setWord] = useState(['A', 'B', 'C', 'N'])
  const [correct, setCorrect] = useState([])
  const [wrong, setWrong] = useState([])

  function match(value) {
    const isCorrect = word.includes(value)

    if (isCorrect) {
      setCorrect(prev => [...new Set([...prev, value])])
    } else {
      setWrong(prev => [...new Set([...prev, value])])
    }
  }

  return (
    <>
      <Header />
      <Progrems />
      <Display word={word} correct={correct} />
      <Keybord match={match} correct={correct} wrong={wrong} />
    </>
  )
}

export default App
