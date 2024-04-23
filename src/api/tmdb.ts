async function get(relativeUrl: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDYwNTQzNmRjNGVkNGZlZTcyNzBkNmIzMmRhNWFiZSIsInN1YiI6IjY1MTE3NTAwZTFmYWVkMDBjNjE3Nzc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xucHzJcMRolPeuKLjZZIgwNuqalA9sz39Boye21SUrk',
    },
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/3${relativeUrl}`,
    options
  )

  const data = response.json()

  return data
}

export const client = {
  async getNowPlaying() {
    try {
      return await get('movie/now_playing?page=1')
    } catch (e) {
      console.log(e)
    }
  },
}
