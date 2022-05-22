import React, { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import MenuIcon from 'assets/icons/MenuIcon'
import CloseIcon from 'assets/icons/CloseIcon'

type MenuProps = {

}

const Menu = ({

}: MenuProps) => {
   const router = useRouter()
   const [isOpen, setOpen] = useState<boolean>(false)

   const handleClick = () => {
      setOpen(prev => !prev)
   }

   return (
      <>
         {isOpen ? (
            <button
               className="fixed top-0 right-0 pt-8 pr-16 z-50"
               onClick={handleClick}
            >
               <CloseIcon
                  width="25"
                  height="25"
                  fill="#202020"
               />
            </button>
         ) : (
            <button
               className={`fixed top-0 right-0 pt-8 pr-16`}
               onClick={handleClick}
            >
               <MenuIcon
                  width="30"
                  height="24"
                  fill="#202020"
               />
            </button>
         )}
         <div
            className={`
               fixed h-screen w-screen flex justify-center items-center right-0 top-0 backdrop-blur-md z-40 border-[#202020] border-4
               ${isOpen ? 'animate-menu-grow' : 'h-0 w-0 border-0 mt-8 mr-16'} 
               transition-all ease-in-out
            `}
         >
            {isOpen && (
               <nav>
                  <ul className="flex flex-col items-center justify-center gap-4 select-none">
                     <li>
                        <Link href="#home">
                           <a className={`text-4xl font-bold uppercase tracking-wider`}>home</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="#project">
                           <a className="text-4xl uppercase tracking-wider">project</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="#blog">
                           <a className="text-4xl uppercase tracking-wider">blog</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="#contact">
                           <a className="text-4xl uppercase tracking-wider">contact</a>
                        </Link>
                     </li>
                  </ul>
               </nav>
            )}
         </div>
      </>
   )
}

export default Menu