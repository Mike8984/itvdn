import { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MovieList from '../../components/movieList'
import { RootState } from '../../features/store'
import { Movie } from '../../types'
import styles from './styles.module.scss'
import { client } from '../../api/tmdb'

export function MoviesFetch() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await client.getNowPlaying()
      console.log(response.results)
      setMovies(response.results)
    }

    loadData()
  }, [])

  return <Movies movies={movies} />
}

type Props = {
  movies: Movie[]
}

const Movies: FC<Props> = ({ movies }) => {
  return (
    <section className="movies">
      <div className="container">
        <div className={styles.movies__inner}>
          <MovieList movies={movies} />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.popular,
})

export default connect(mapStateToProps)(Movies)
