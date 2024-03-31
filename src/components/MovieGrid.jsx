'use client'

import InfiniteScroll from "react-infinite-scroll-component";
import useSearchContext from "@/hooks/useSearch";
import urlBilder from "@/service/urlBilder"
import useMovies from "@/hooks/useMovies"
import Image from "next/image"
import Link from "next/link"
import { Spinner } from "@chakra-ui/spinner";
import { Text } from "@chakra-ui/layout";
import React from "react";
import TitleGridMovie from "./TitleGridMovie";


const MovieGrid = () => {
  const { searchGenre, searchText } = useSearchContext()
  const query = { genre: searchGenre, title: searchText, page: 1, perPage: 12 };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
  } = useMovies(query);

  const fetchMovieCount =
    data?.pages.reduce((total, page) => total + page?.length, 0) || 0;


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
      <TitleGridMovie />

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

