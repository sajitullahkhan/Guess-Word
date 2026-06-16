function Keybord({ match, correct, wrong }) {
  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'brack', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'brack', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

  function getColor(letter) {
    if (correct.includes(letter)) return 'bg-green-500'
    if (wrong.includes(letter)) return 'bg-red-500'
    return 'bg-yellow-500'
  }

  function handleBtn(e) {
    if (e.target.localName === "button") {
      match(e.target.innerText)
    }
  }

  return (
    <section onClick={handleBtn} className="flex flex-col justify-center items-center text-center">
      <div>
        {letters.map((l) => (
          l === 'brack'
            ? <br key={crypto.randomUUID()} />
            : <button
              key={crypto.randomUUID()}
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