function Display({ later, correct }) {
  return (
    <section>
      <div className="flex justify-center gap-0.5 m-10">
        {later.map((e, i) => {
          const isRevealed = correct.includes(e)
          return (
            <div
              key={i}
              className={`text-center p-2 w-11 ${isRevealed ? 'bg-green-500 text-white' : 'bg-black'}`}
            >
              {isRevealed ? e : '|'}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Display
