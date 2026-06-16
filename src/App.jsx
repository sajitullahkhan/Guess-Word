import { useState } from "react"
import Display from "./components/Display.jsx"
import Header from "./components/Header.jsx"
import Keybord from "./components/Keybord.jsx"
import Progrems from "./components/Programs.jsx"

function App() {
  const [word, setWord] = useState(['a', 'B', 'C', "d"])
  const [status, setStatus] = useState(false)

  function match(value) {
    word.map((l) => {
      value === l && setStatus(true)
    })
  }

  return (
    <>
      <Header></Header>
      <Progrems></Progrems>
      <Display word={word}></Display>
      <Keybord match={match}></Keybord>
    </>
  )
}

export default App
