import { useState, useEffect } from 'react'

import GameCard from './GameCard';
import GameOverlay from './GameOverlay';

export default function GamesList({ language }) {
  const [games, setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=e0099886817f44dfab96cfefcdfddc61`)
      .then(response => response.json())
      .then(data => {
        setGames(data.results)
        console.log(data.results)
      });
  }, [])

  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4'>
      {
        games.map(game => (
          <GameCard key={game.id} game={game} onOpen={setSelectedGame} />
        ))
      }
      <GameOverlay game={selectedGame} onClose={() => setSelectedGame(null)} />
    </main>
  )
}
