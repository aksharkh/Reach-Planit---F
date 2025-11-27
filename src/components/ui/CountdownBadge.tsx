

const CountdownBadge = ({val} : { val: string}) => {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-lg px-3 py-2 min-w-10 text-center border border-white/50">
        <span className="text-lg font-bold text-indigo-950 block leading-none">{val}</span>
    </div>
  )
}

export default CountdownBadge