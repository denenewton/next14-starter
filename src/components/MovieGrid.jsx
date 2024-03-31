'use client'

import InfiniteScroll from "react-infinite-scroll-component";
import useSearchContext from "@/hooks/useSearch";
import { usePathname } from "next/navigation";
import urlBilder from "@/service/urlBilder"
import useMovies from "@/hooks/useMovies"
import { useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { Spinner } from "@chakra-ui/spinner";
import { Text } from "@chakra-ui/layout";
import React from "react";


const MovieGrid = () => {
  const { searchGenre, searchText, setSearchGenre, setSearchText } = useSearchContext()
  const query = { genre: searchGenre, title: searchText, page: 1, perPage: 12 };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    // isFetching,
    // isFetchingNextPage,
    // status,
    // isLoading,
  } = useMovies(query);
  const pathname = usePathname()

  const fetchMovieCount =
    data?.pages.reduce((total, page) => total + page?.length, 0) || 0;

  useEffect(() => {
    if (pathname === '/') {
      setSearchGenre('');
      setSearchText('')
    }
  }, [pathname])

  if (error) {
    console.log(error);
  }

  return (
    <InfiniteScroll
      dataLength={fetchMovieCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      endMessage={<Text></Text>}
      loader={<Spinner />}
    >
      {
        pathname !== '/' && (
          <h1 className="text-3xl text-center font-semibold mb-5">
            {
              searchGenre && searchText ? searchGenre + ': ' + searchText :
                searchGenre === 'All Genres' ? 'Movies' :
                  searchGenre ? searchGenre + ': ' + searchText :
                    searchText ? 'Search: ' + searchText : 'Movies'
            }
          </h1>
        )
      }
      <div className="grid-container">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.map((mov, index) => (
              <div key={index} className="xs:max-w-md max-w-lg rounded overflow-hidden shadow-lg ">
                <Image
                  src={mov.url_image}
                  width={1000}
                  height={1000}
                  alt={mov.title}
                  className="w-full"
                />
                <Link href={'/movie/' + urlBilder(mov.title)} >
                  <div className="px-2 py-4">
                    <p className="font-simibold text-lg mb-2 hover:text-gray-500 font-medium">{mov.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default MovieGrid

