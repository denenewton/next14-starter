import Nav from '@/components/navbar/Nav'
import Login from '@/components/Login'

const page = () => {
  return (
    <div className='px-5 md:px-10'>
      <Nav />
      <main className="main-container">
        <h1 className="text-4xl font-bold text-center">
          Sign In
        </h1>
        <Login />
      </main>


    </div>
  )
}

export default page