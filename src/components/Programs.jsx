const programs = [
  { name: 'HTML', color: 'bg-orange-500' },
  { name: 'CSS', color: 'bg-green-500' },
  { name: 'Javascript', color: 'bg-yellow-500' },
  { name: 'React', color: 'bg-blue-500' },
  { name: 'Typescript', color: 'bg-red-500' },
  { name: 'Node.js', color: 'bg-purple-500' },
  { name: 'Python', color: 'bg-lime-500' },
  { name: 'Ruby', color: 'bg-pink-500' },
  { name: 'Assembly', color: 'bg-green-300' },
]

function Progrems({ wrong }) {

  return (
    <section className="flex justify-center mt-10 flex-wrap">
      {programs.map((p, i) => (
        <div
          key={i}
          className={`${i < wrong.length ? 'bg-gray-500' : p.color} p-2 rounded-lg m-1`}
        >
          {p.name}
        </div>
      ))}
    </section>
  )
}

export default Progrems