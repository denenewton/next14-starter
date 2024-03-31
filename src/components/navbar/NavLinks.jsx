'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLinks = ({ link }) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.path}
      className={pathname === link?.path ? 'text-white dropdown_link' : 'text-gray-400 dropdown_link'}>
      {link.title}
    </Link>
  )
}

export default NavLinks