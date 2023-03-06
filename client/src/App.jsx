import { useEffect, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import * as movieService from './services/movieService'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setMovies((await movieService.getAll()).data)
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <Movies movies={movies} />
    </div>
  )
}

export default App
