import { Action, Reducer } from 'redux'
import { Movie } from '../../types'

export type MoviesState = {
  popular: Movie[]
}

const initialState: MoviesState = {
  popular: [
    { id: 1, title: 'Star Wars', popularity: 98, description: 'Galaxy...' },
    {
      id: 2,
      title: 'The Godfather',
      popularity: 99,
      description: 'Godfather...',
    },
    { id: 3, title: 'Dark Knight', popularity: 99, description: 'Batman...' },
    {
      id: 4,
      title: 'The Godfather 2',
      popularity: 99,
      description: 'Part two...',
    },
  ],
}

export const moviesReducer: Reducer<MoviesState, Action> = (state, action) => {
  return initialState
}
