'use client'

import Nav from "@/components/navbar/Nav"

const page = () => {
  return (
    <div className='px-5 md:px-10'>
      <Nav />

      <main className=" main-container">
        <div className="flex flex-col items-center justify-center max-w-[700px]  mx-auto">
          <h1 className="text-4xl mb-5 font-semibold text-center">
            Get access to our single plan!
          </h1>
          <p className="text-justify">
            To watch movies you need access through our unique plan. Our single
            plan costs only 5.00 BRL. This site is for anyone who wants to
            improve their English by listening to lots of movies in English. If
            you enjoy watching movies with original sound spoken by the original
            actors, then this plan is for you.
          </p>
        </div>
      </main>

    </div>
  )
}

export default page