import Nav from "@/components/navbar/Nav";
import MovieGrid from "@/components/MovieGrid";

const Search = () => {

  return (
    <div className='px-5 md:px-10'>
      <Nav />
      <main className="main-container">
        <MovieGrid />
      </main>
    </div>
  )

}
export default Search;