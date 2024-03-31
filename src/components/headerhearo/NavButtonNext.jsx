import { useRouter } from 'next/navigation';

const NavButtonNext = () => {
  const route = useRouter()
  return (
    <button
      className='text-white z-20 absolute right-[20px] top-[55px] sm:top-[7px]'
      onClick={() => route.forward()}>
      Go Next
    </button>
  )
}

export default NavButtonNext