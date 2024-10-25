import PersonUI from "./PersonUI";


function Person({ params }) {

  return <PersonUI params={params} />

}

export default Person



















// async function getMovie(title) {
//   const response = await fetch("http://localhost:3000/api/movie/" + title, { method: 'GET' })
//   const mov = await response.json()
//   console.log(response.ok);
//   return mov.data
// }
//const movie = movies.find(m => m.title.toLowerCase() === title)