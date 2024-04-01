import { GUET_MOVIES_BY_TITLE, queryData, Axios } from '@/utils/cliente'
import urlSlugReverse from '@/service/urlSlugReverse'
import MovieUI from './MovieUI';

async function getMovie(title) {
  
  const _title = urlSlugReverse(title)
  try {
    const movies = await Axios.post(
      "/graphql", queryData(GUET_MOVIES_BY_TITLE, { title: _title }));

    return movies.data.data.moviesByTitle

  } catch (error) {
    return console.log({ error: 'Internal Server Error' });
  }
}

const page = async ({ params }) => {
  try {
    const movie = await getMovie(params.slug)
    if (!movie.errors) return <MovieUI movie={movie} />

    return <p>{movie.errors}</p>
  } catch (error) {
    return <p>{error}</p>
  }
}

export default page



















// async function getMovie(title) {
//   const response = await fetch("http://localhost:3000/api/movie/" + title, { method: 'GET' })
//   const mov = await response.json()
//   console.log(response.ok);
//   return mov.data
// }
//const movie = movies.find(m => m.title.toLowerCase() === title)
