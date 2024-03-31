import Nav from "@/components/navbar/Nav"
import SignupCard from "./SignupCard"

const page = () => {
  return (
    <div className='px-5 md:px-10'>
      <Nav />

      <main className="main-container">
        <h1 className="text-4xl  text-center  font-bold">
          Sign Up
        </h1>
        <SignupCard />
      </main>


    </div>
  )
}

export default page