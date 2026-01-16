export default function GameCard({ game, onOpen }) {
  return (
    <div onClick={() => onOpen(game)} className='group relative h-40 rounded-md overflow-hidden cursor-pointer shadow-lg'>
      <img src={game.background_image} className='w-full h-full object-cover object-top md:transition-transform md:duration-500 md:group-hover:scale-110' alt={game.name} />
      <div className='absolute inset-0 bg-black/50 md:bg-black/10 md:transition-colors md:duration-300 md:group-hover:bg-black/40' />
      <div className='absolute bottom-0 left-0 w-full p-3'>
        <div className='text-white md:translate-y-4 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100'>
          <p className='font-semibold'>{game.name}</p>
          <div>
            <span className='font-semibold text-sm inline-block rounded-sm border-2 border-green-300 text-green-300 p-1'>{game.metacritic}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
