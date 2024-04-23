import { FC } from "react"
import { Movie } from "../../types"
import MovieItem from "../movieItem"
import styles from './styles.module.scss'

type Props = {
  movies: Movie[]
}

const MovieList: FC<Props> = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
