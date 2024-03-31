'use client'

import { useRouter } from 'next/navigation';

const NavButtonBack = () => {
  const route = useRouter()

  return (
    <button
      className='text-white z-20 absolute top-[55px] sm:top-[7px]'
      onClick={() => route.back()}>
      Go Back
    </button>
  )
}

export default NavButtonBack