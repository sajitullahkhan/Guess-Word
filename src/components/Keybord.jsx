function Keybord({ match }) {

  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'brack', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'brack', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

  function hendelBtu(e) {
    if (e.target.localName === "button") {
      match(e.target.innerText)
    }
  }
  return (
    <section onClick={hendelBtu} className="flex flex-col justify-center items-center text-center">
      <div>
        {letters.map((l) => {
          return (
            l === 'brack' ? <br key={crypto.randomUUID()} /> : <button key={crypto.randomUUID()} className="bg-yellow-500 p-2 w-11 rounded-lg m-1">
              {l}
            </button>
          )
        })}
      </div>
      <button className="bg-blue-500 p-2 w-40 rounded-lg m-1 font-bold">New Game</button>
    </section>
  )
}

export default Keybord;