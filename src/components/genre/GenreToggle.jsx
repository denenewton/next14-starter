'use client'

import { useState } from "react";
import useSearchContext from "@/hooks/useSearch";
import genres from "./genres";
import Link from "next/link";

const GenreToggle = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const { searchGenre, setSearchGenre, setSearchText } = useSearchContext();

  const handleSearch = (genre) => {
    if (genre === "All Genres") { setSearchGenre(''); setSearchText(''); }
    setSearchGenre(genre);
    setToggleDropdown(false);
  }

  return (
    <div className="backdrop-blur-[0px] bg-black/60 text-slate-50 flex items-center p-0 justify-center w-24 h-10 rounded-lg relative  md:flex hidden">
      <button
        type="button"
        className="text-gray-400 relative"
        onClick={() => setToggleDropdown(!toggleDropdown)}>
        Genres
      </button>
      {toggleDropdown && (
        <div className='backdrop-blur-[0px] bg-black/60 dropdown justify-center items-start min-w-[200px] absolute right-0 top-12 z-50'>
          {genres.map((genre, index) => (
            <Link
              href={'/search/' + genre}
              key={index}
              type="button"
              onClick={() => { handleSearch(genre) }}
              className="bg-transparent font-light"
            >
              <span className={genre === searchGenre ? "font-bold" : ""}>
                {genre}
              </span>
            </Link>
          ))
          }

        </div>
      )}
    </div>


  )
}

export default GenreToggle

// const GenreBottom = ({ genre }) => {
//   {
//     const { searchGenre, setSearchGenre } = useSearchContext();

//     return (
//       <button
//         type="button"
//         onClick={() => { setSearchGenre(genre);  setToggleDropdown(false); }}
//         className="bg-transparent"
//       >
//         <span className={genre === searchGenre ? "font-bold" : ""}>
//           {genre}
//         </span>
//       </button>
//     )
//   }

// }//className='mt-5 w-full black_btn'