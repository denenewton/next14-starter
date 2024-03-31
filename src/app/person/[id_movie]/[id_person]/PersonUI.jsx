
'use client'

import usePerson from '@/hooks/usePerson';
import HeaderHearo from '@/components/headerhearo/HeaderHearo';
import Image from 'next/image'
import NavButtonBack from '@/components/headerhearo/NavButton';


const PersonUI = ({ params }) => {

  const { data } = usePerson(parseInt(params.id_person), parseInt(params.id_movie));
  //const { userDoc, currentUser } = useAuth();
  return (
    <>
      {
        data && (

          <HeaderHearo data={data}>
            <NavButtonBack />
            <div className='single-movie-container'>
              <div className='w-full h-full flex flex-col gap-[5rem] '>
                <div className='w-full h-full max-w-[848px] mx-auto flex flex-col gap-5 '>

                  <div className="flex flex-col  w-full mx-auto  relative " >
                    <div className='w-[200px] mx-auto sm:hidden flex '>
                      <Image
                        src={data?.profile_path}
                        width={100}
                        height={100}
                        alt={data.name}
                        className='w-full h-fit rounded-lg object-cover'
                      />
                    </div>

                    <div className="flex mt-10">
                      <div className='w-[200px] sm:flex hidden'></div>
                      <div className='w-full flex flex-col items-center justify-center   mx-auto'>
                        <h1 className='text-4xl text-slate-700'>{data.name} <span>({data.gender == 2 ? 'Actor' : 'Actress'})</span></h1>
                        <p className='tracking-wide flex items-center gap-4'>
                          <span>{data.place_of_birth}</span>
                          <span className='justify-self-auto '>&bull;</span>
                          <span> {data.birthday.split('-').join('/')}</span>
                        </p>

                        <p className='tracking-wide flex items-center gap-4'>
                          <span className='flex gap-0 '>Popularity: </span> {data.popularity}
                        </p>
                      </div>
                    </div>

                    <div className='flex mt-5'>
                      <div className='w-[200px] sm:flex hidden'></div>
                      <h2 className='w-full text-center text-2xl leading-10 mt-3'>Biography</h2>
                    </div>
                    <span className='w-full text-justify'>
                      <Image
                        src={data?.profile_path}
                        width={100}
                        height={100}
                        alt={data.name}
                        className='w-[200px] h-fit rounded-lg object-cover float-left mt-[-170px] mr-5 sm:flex hidden'
                      />
                      {data?.biography}
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </HeaderHearo>)
      }
    </>
  )
}

export default PersonUI