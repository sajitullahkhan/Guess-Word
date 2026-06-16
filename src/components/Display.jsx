function Display({ word }) {
  return (
    <section>
      <div className="flex justify-center gap-0.5 m-10">
        {word.map((e) => {
          return <div key={crypto.randomUUID()} className="bg-black text-white text-center p-2 w-11">{e}</div>
        })}
      </div>

    </section>
  )
}

export default Display;