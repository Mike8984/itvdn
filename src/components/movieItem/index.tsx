import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

type Props = {
  id: number
  title: string
  description: string
  popularity: number
}

const MovieItem: FC<Props> = ({ id, title, description, popularity }) => {
  return (
    <Link to={`/movies/${id}`} className={styles.movieItem}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/phantom-menace-ferguson-onesheet-final-empirestrap_arti_e95a79c8.jpeg?region=0%2C0%2C1600%2C900"
        alt="movie"
        className={styles.poster}
      />
      <div className={styles.movieItemContent}>
        <h4 className={styles.movieItemTitle}>{title}</h4>
        <p className={styles.movieItemDescription}>{description}</p>
        <p className={styles.popularity}>{popularity}</p>
      </div>
    </Link>
  )
}

export default MovieItem
