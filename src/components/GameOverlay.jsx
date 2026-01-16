import { useEffect } from "react"
import GameDetails from "./GameDetails"

export default function GameOverlay({ game, onClose }) {
  const isOpen = Boolean(game)

  useEffect(() => {
    document.body.style.overflow = game ? 'hidden' : 'auto'
  }, [game])

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
      {isOpen && (
        <div className='hidden md:block fixed z-50 top-1/2 left-1/2 w-125 -translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-lg'>
          <GameDetails game={game} onClose={onClose} />
        </div>
      )}

      <div className={`md:hidden fixed z-50 bottom-0 left-0 w-full bg-slate-900 rounded-t-xl transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        {game && <GameDetails game={game} onClose={onClose} />}
      </div>
    </>
  )
}
