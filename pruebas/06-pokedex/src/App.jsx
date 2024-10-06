import { useState, useEffect } from 'react'
import './styles.css'
import InfiniteScroll from 'react-infinite-scroll-component'

const POKEDEX_API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export function App () {
  const [pokemon, setPokemon] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [search, setSearch] = useState('')
  const [hasMore, setHasMore] = useState(true)
  const [findPokemon, setFindPokemon] = useState({})

  // Función para buscar un Pokémon específico
  const searchPokemon = async (pokemonName) => {
    try {
      const response = await fetch(POKEDEX_API_URL + pokemonName.toLowerCase())
      const data = await response.json()
      setFindPokemon(data) // Al buscar, reemplaza el array con el resultado
      setPokemon([]) // Reinicia el array de Pokémon
      setHasMore(false) // No habrá más elementos para cargar después de la búsqueda
    } catch (error) {
      console.error('Error buscando Pokémon:', error)
      setPokemon([]) // Reinicia si no se encuentra nada
    }
  }

  // Función para cargar más Pokémon (infinite scroll)
  const fetchPokemon = async () => {
    try {
      const url = nextUrl || POKEDEX_API_URL
      const response = await fetch(url)
      const data = await response.json()

      setPokemon((prevPokemon) => [...prevPokemon, ...data.results]) // Agrega nuevos Pokémon
      setNextUrl(data.next) // Actualiza la URL siguiente

      if (!data.next) {
        setHasMore(false) // Si no hay más páginas, hasMore será false
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error)
    }
  }

  // useEffect para cargar Pokémon al montar el componente
  useEffect(() => {
    fetchPokemon() // Llama a la función cuando se monte el componente
  }, [])

  // Cargar más Pokémon con un retraso
  const loadMorePokemon = () => {
    setTimeout(() => {
      fetchPokemon()
    }, 1000) // Retraso de 1 segundo
  }

  // Manejar la búsqueda del Pokémon
  const handleSearch = (event) => {
    event.preventDefault()
    if (search.trim()) {
      searchPokemon(search)
    }
  }

  return (
    <main>
      <div>
        <h1 style={{ textAlign: 'center' }}>Pokedex</h1>
        <form onSubmit={handleSearch}>
          <label htmlFor='search'>Buscar Pokemon</label>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Buscar</button>
        </form>
      </div>

      <section>
        {

                    pokemon.map((poke, index) => (
                      <div key={index}>
                        <h2>{poke.name}</h2>
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split('/')[6]}.png`}
                          alt={poke.name}
                        />
                      </div>
                    ))

}
      </section>

      {findPokemon.length > 0
        ? (
          <div className='flex justify-center'>
            <h2>{findPokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${findPokemon.id}.png`} alt='' />
          </div>
          )
        : (
          <InfiniteScroll
            dataLength={pokemon.length} // Número de Pokémon cargados
            next={loadMorePokemon} // Función que carga más Pokémon
            hasMore={hasMore} // Solo carga más si hay más datos
            loader={<h4 style={{ textAlign: 'center', fontSize: '3rem' }}>Loading...</h4>}
          />
          )}
    </main>
  )
}
