import { useState } from "react"

function Keybord({ match, correct, wrong, newGame, getColor }) {
  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'brack', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'brack', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

  function handleBtn(e) {
    if (e.target.localName === "button" && e.target.innerText !== "New Game") {
      match(e.target.innerText)
    } else if (e.target.innerText === "New Game") {
      newGame()
    }
  }

  return (
    <section onClick={handleBtn} className="flex flex-col justify-center items-center text-center">
      <div>
        {letters.map((l, i) => (
          l === 'brack'
            ? <br key={i} />
            : <button
              key={i}
              className={`${getColor(l)} p-2 w-11 rounded-lg m-1`}
            >
              {l}
            </button>
        ))}
      </div>
      <button className="bg-blue-500 p-2 w-40 rounded-lg m-1 font-bold">New Game</button>
    </section>

  )
}

export default Keybord
