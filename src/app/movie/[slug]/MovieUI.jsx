'use client'

import Image from 'next/image'
import Link from 'next/link';

import HeaderHearo from '@/components/headerhearo/HeaderHearo';
import NavButtonNext from '@/components/headerhearo/NavButtonNext';
import NavButtonBack from '@/components/headerhearo/NavButton';

const MovieUI = ({ movie }) => {
  const genres = movie?.genres.map(genre => genre.name).join(', ');
  const id_movie = movie?.id;


  return (

    <HeaderHearo data={movie}>
      <NavButtonBack />
      <NavButtonNext />

      <div className='single-movie-container'>
        <div className="flex flex-col items-center justify-center max-w-[700px]  mx-auto">
          <h1 className='text-4xl text-slate-700'>{movie?.title} <span>({movie?.release_date.split('-')[0]})</span></h1>
          <p className='tracking-wide flex itmes-center gap-4'>{movie?.release_date.split('-').join('/')}
            <span className='justify-self-auto '>&bull;</span>
            <span className='flex gap-0'>{genres} </span></p>
        </div>
        <div className='max-w-[848px] mx-auto'>
          <h2 className='text-center text-2xl leading-10 mt-3'>Sinopse</h2>
          <p className='text-justify'>
            {movie?.description}
          </p>
        </div>
        <div className='w-full h-[300px] mt-10'>
          <h2 className='text-center text-2xl leading-10 mb-2'>Casts</h2>
          <div className='w-full h-full flex gap-2  overflow-x-auto'>
            {
              movie?.casts.map(cast => (
                <div key={`${cast.name}${Math.random() * 1000}`} className='flex-none w-36 h-48 rounded-lg shadow-lg'>

                  <Image
                    src={cast?.profile_path}
                    width={200}
                    height={200}
                    alt={cast?.name}
                    className='w-full h-full object-cover rounded-lg' />

                  <div className="px-2 py-4">
                    <Link href={`/person/${id_movie}/${cast?.id}`}>
                      <p className="font-simibold text-md  hover:text-gray-500 font-medium">{cast?.name}</p>
                      <span className='text-xs leading-none font-light mt-[-1px]'>{cast?.character}</span>
                    </Link>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </HeaderHearo>

  )
}

export default MovieUI
