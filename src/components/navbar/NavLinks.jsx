'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import useSearchContext from '@/hooks/useSearch'


const NavLinks = ({ link }) => {
  const { setSearchGenre, setSearchText } = useSearchContext()
  const pathname = usePathname()

  const handleCleaner = (link) => {
    if (link === '/') {
      setSearchGenre('');
      setSearchText('');
    }
  }

  return (
    <Link
      href={link.path}
      onClick={() => handleCleaner(link.path)}
      className={pathname === link?.path ? 'text-white dropdown_link' : 'text-gray-400 dropdown_link'}>
      {link.title}
    </Link>
  )
}

export default NavLinks