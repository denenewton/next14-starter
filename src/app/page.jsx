import Nav from "@/components/navbar/Nav";
import MovieGrid from "@/components/MovieGrid";

const Home = () => {

  return (
    <div className='px-5 md:px-10'>
      <Nav />
      <main className="main-container">
        <h1 className="text-3xl text-center font-semibold mb-5">
          Movies
        </h1>
        <div >
          <MovieGrid />
        </div>
      </main>
    </div>
  )

}
export default Home;