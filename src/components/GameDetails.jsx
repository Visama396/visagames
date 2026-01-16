export default function GameDetails({ game, onClose }) {
  return (
    <div className="p-4 text-white">
      <div className="md:hidden mx-auto mb-2 h-1 w-10 rounded-full bg-white/20" />
      <h2 className="text-xl font-bold mb-2">{game.name}</h2>

      <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover rounded mb-3" />

      <p className="text-sm opacity-80"> Rating: {game.rating}</p>

      <button onClick={onClose} className="mt-4 px-4 py-2 bg-white/10 rounded hover:bg-white/20">
        Close
      </button>
    </div>
  )
}
