import { useState } from 'react'

function GamesGrid({ apikey }) {
    const baseRAWG = `https://api.rawg.io/api/games?key=${apikey}`
    let searchRAWG = baseRAWG;
    const [gameNameFilter, setGameNameFilter] = useState("")
    const [searchUrlRawg, setSearchRawgUrl] = useState(baseRAWG)
    const [filteredGames, setFilteredGames] = useState([])

    const handleChange = event => {
        setGameNameFilter(event.target.value)
        setSearchRawgUrl(baseRAWG + `?search=${event.target.value}`)
        searchGamesByName()
    }

    const handleSubmit = event => {

    }

    const searchGamesByName = async () => {
        await fetch(searchUrlRawg).then(response => console.log(response)).catch(err => console.error(err))
    }

    return (
        <section>
            <div>
                <form className="max-w-lg mx-auto flex flex-col gap-2">
                    <div className="flex px-4 py-2 rounded-lg gap-3 bg-gray-700">
                        <select id="dropdown" className="bg-gray-700">
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Racing">Racing</option>
                            <option value="MMO">MMO</option>
                        </select>
                        <input onChange={handleChange} value={gameNameFilter} type="search" id="search-dropdown" className="flex-1 outline-0" placeholder="Search games by name" required />
                        <button onClick={handleSubmit} type="submit" className="hover:cursor-pointer">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                    </div>
                    {filteredGames.length > 0 && (
                        <div className='px-4 py-1 bg-gray-700 rounded-lg'>
                            <h2>Game bla bla</h2>
                        </div>
                    )}
                </form>    
            </div>
            <h2>Searching for: {searchUrlRawg}</h2>
        </section>
    )
}

export default GamesGrid;