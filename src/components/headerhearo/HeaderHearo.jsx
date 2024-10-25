import Image from 'next/image';

const HeaderHearo = ({ children, background }) => {

  return (
    <div className='px-5 md:px-5'>
      <div className={"flex w-full  h-full  items-start bg-gradient-to-t from-white via-transparent to-black px-0 md:px-0 absolute top-0 left-0"}>
        <Image
          src={background}
          width={10000}
          height={10000}
          alt={'image'}
          priority={true}
          className='w-full h-full  object-cover mix-blend-overlay absolute'
        />
      </div>

      {children}
    </div>
  )
}

export default HeaderHearo