'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LinksDropDown } from './Links'
import useAuth from '@/hooks/useAuth'
import {
  signInWithGooglePopup,
  signOutUser,
  createUserDocumentFromAuth,
} from "@/utils/firebase.utils";

const ToggleDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const _links = LinksDropDown

  const { currentUser } = useAuth()
  //const authorized = userDoc?.authorized;

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      alert("Sign in was successfully done!");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className='w-[35px] h-[35px]'>
        <Image
          src={currentUser ? currentUser.photoURL : "/assets/login.png"}
          width={100}
          height={100}
          alt='profile'
          onClick={() => setToggleDropdown(!toggleDropdown)}
          className='w-full h-full bg-white object-cover rounded-full  cursor-pointer relative'
        />
      </div>
      {toggleDropdown && (
        <div className='dropdown backdrop-blur-[2px] bg-white/60  w-[200px]'>
          {currentUser && (<p>{currentUser.displayName}</p>)}
          {
            !currentUser ? (
              <>
                <button onClick={signInWithGoogle}>Google Sign In</button>
                {_links.map((link, index) => (
                  link.title !== 'Sign In Google' && (
                    <Link
                      key={index}
                      href={link.path}
                      className='dropdown_link'
                      onClick={() => setToggleDropdown(false)}
                    >
                      {link.title}
                    </Link>
                  )))}
              </>
            ) : (
              <button
                type='button'
                onClick={() => {
                  setToggleDropdown(false);
                  signOutUser();
                }}
                className='mt-5 w-full black_btn'
              >
                Sign Out
              </button>
            )
          }
        </div>
      )}
    </>
  )
}

export default ToggleDropdown