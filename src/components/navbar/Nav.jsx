'use client'

import NavLinks from './NavLinks'
import Link from 'next/link'
import Image from 'next/image'
import LinksNav from './Links'
import ToggleDropdown from './ToggleDropdown'
import SearchInput from '../SearchInput'
import GenreList from '../genre/GenreList'
import useSearchContext from '@/hooks/useSearch'


const Nav = () => {
  const { setSearchGenre, setSearchText } = useSearchContext();
  const _links = LinksNav

  const handleCleaner = () => {
    setSearchGenre('');
    setSearchText('');
  }

  return (
    <div className='container-header'>
      <div className={"flex w-full h-[100vh] items-start bg-gradient-to-t from-white via-transparent to-black px-0 md:px-0 absolute top-0 left-0"}>
        <Image
          src={'https://image.tmdb.org/t/p/original/gOlMx8kFIIUmYVRIKuLbaLhBJSZ.jpg'}
          width={10000}
          height={10000}
          alt='background home'
          className='w-full h-full object-cover  mix-blend-overlay absolute'
        />
      </div>
      <div className="w-full h-full bg-gradient-to-t from-white via-transparent to-black absolute top-0 left-0 "></div>
      <div className='w-full backdrop-blur-[1px] bg-black/0 text-slate-50 mx-auto flex items-center justify-between h-[75px] mt-[-19px] rounded-b-lg px-5 md:px-10 absolute top-5 left-0 z-10'>
        <div className='flex items-center gap-10'>
          <Link href="/" onClick={handleCleaner}>
            <div className='flex flex-col w-[40px]  py-2'>
              <Image
                src="/assets/crown.svg"
                width={37}
                height={37}
                alt='logo'
                className='w[37px] h-[37px]'
              />
              <p className='text-xs mt-[-3px]' >
                movies
              </p>
            </div>
          </Link>
          <SearchInput />
        </div>
        <div className=' flex items-center gap-5 relative'>

          <nav className=' flex gap-3 text-slate-800 hover:text-gray-500 font-medium'>
            <div className='flex items-center gap-5 '>
              {_links.map(link => <NavLinks key={link.title} link={link} />)}
              <GenreList />
            </div>
          </nav>
          <ToggleDropdown />
        </div>
      </div>

    </div>
  )


}

export default Nav