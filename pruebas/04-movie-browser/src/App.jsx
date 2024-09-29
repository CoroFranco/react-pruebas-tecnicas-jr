import { useState } from 'react'
import './style.css'
const MOVIE_INFO_ENDPOINT = 'https://www.omdbapi.com/?apikey=132e52e6&s='

export function App () {
  const [movie, setMovie] = useState([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  function updateTitle (event) {
    const newTitle = event.target.value
    setTitle(newTitle)
  }

  const searchMovieInfo = (e) => {
    e.preventDefault()
    fetchMovieInfo(1)
  }

  const fetchMovieInfo = async (page) => {
    if (!title.trim()) return
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(MOVIE_INFO_ENDPOINT + title + '&page=' + page)
      if (!response.ok) {
        throw new Error(`http error status: ${response.status}`)
      }
      const data = await response.json()
      if (data.Response === 'False') {
        throw new Error('No movies founded')
      } else if (typeof data !== 'object') {
        throw new Error('Data is not in the correct format')
      }
      console.log(page)
      const newMovies = data.Search.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))

      setMovie(newMovies)
      setLoading(false)
      setTotalPages(Math.ceil(data.totalResults / 10))
      setCurrentPage(page)
    } catch (error) {
      setError(error.message)
      setMovie([])
      setLoading(false)
    }
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      fetchMovieInfo(newPage)
    }
  }

  return (
    <main>
      <form onSubmit={searchMovieInfo}>
        <textarea onChange={updateTitle} value={title} name='' id='' />
        <button type='submit'>Buscar</button>
      </form>
      {
        error &&
          <div>{error}</div>

      }
      {
          loading && (
            <div>
              <p>Loading...</p>
            </div>
          )
            }
      <section className='gallery'>
        {
          Object.keys(movie).length > 0 && (
            movie.map((movie, index) => (
              <article key={index}>
                <h1>{movie.title}</h1>
                <p>{movie.year}</p>
                <img src={movie.poster} alt='poster de la película' />
              </article>
            ))

          )
            }
      </section>
      {
        Object.keys(movie).length > 0 &&
          <section style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
            <button style={{ color: 'red', backgroundColor: 'gray' }}>{currentPage}</button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente</button>
          </section>
      }

    </main>
  )
}
