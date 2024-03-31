'use client'

import { SearchIcon } from "@chakra-ui/icons";
import { useRef, useContext } from "react";
import SearchContext from "@/context/SearchContext";
import { useRouter, usePathname } from "next/navigation";

const SearchInput = () => {
  const ref = useRef(null);
  const { setSearchText } = useContext(SearchContext);
  const route = useRouter()
  const pathname = usePathname()

  const getPathName = () => {
    if (pathname.includes('/search')) return pathname + '?'
    return '/search/'
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value)

          route.push(`${getPathName()}${ref.current.value}`)
        }
      }}
      className="w-full "
    >
      <div className="flex items-center gap-2">

        <SearchIcon color={'gray.50'} mr={'-2.2rem'} />

        <input
          ref={ref}
          placeholder="Search movies"
          className="rounded-full text-gray-50 hover:text-gray-500 bg-transparent hover:bg-slate-50 focus:outline-none focus:ring focus:ring-slate-50 hover:ring hover:ring-slate-50 pl-10 py-[6px]"
        />
      </div>

    </form>
  );
};


export default SearchInput;
