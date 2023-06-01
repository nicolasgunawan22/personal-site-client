import React, { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import MenuIcon from 'assets/icons/MenuIcon'
import CloseIcon from 'assets/icons/CloseIcon'
import GithubIcon from 'assets/icons/Logo/GithubIcon'
import InstagramIcon from 'assets/icons/Logo/InstagramIcon'

type MenuProps = {

}

const Menu = ({

}: MenuProps) => {
   const router = useRouter()
   const [isOpen, setOpen] = useState<boolean>(false)

   const handleClick = () => {
      setOpen(prev => !prev)
   }

   const menuLinks: { name: string, href: string }[] = [
      {
         name: "home",
         href: "#home"
      },
      {
         name: "project",
         href: "#project"
      },
      {
         name: "blog",
         href: "#blog"
      },
      {
         name: "contact",
         href: "#contact"
      },
   ]

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
               fixed h-screen w-screen flex justify-center items-center right-0 top-0 
               backdrop-blur-md z-40
               ${isOpen ? 'animate-menu-grow' : 'h-0 w-0 border-0 mt-8 mr-16'} 
               transition-all ease-in-out
            `}
         >
            {isOpen && (
               <nav>
                  <ul className="flex flex-col items-center justify-center gap-4 select-none">
                     {menuLinks.map((item, i) => {
                        return (
                           <li key={i}>
                              <Link href={item.href}>
                                 <a onClick={handleClick} className={`text-4xl uppercase tracking-wider`}>
                                    {item.name}
                                 </a>
                              </Link>
                           </li>
                        )
                     })}
                  </ul>
                  <div className="flex w-full justify-center gap-8 mt-4">
                     <Link href="https://github.com/nicolasgunawan22/">
                        <a target="_blank" onClick={handleClick} className={`text-4xl uppercase tracking-wider`}>
                           <GithubIcon
                              width='32'
                              height='32'
                              fill="#202020"
                           />
                        </a>
                     </Link>
                     <Link href="https://www.instagram.com/nicolas_gunawan/">
                        <a target="_blank" onClick={handleClick} className={`text-4xl uppercase tracking-wider`}>
                           <InstagramIcon
                              width='32'
                              height='32'
                              fill="#202020"
                           />
                        </a>
                     </Link>
                  </div>
               </nav>
            )}
         </div>
      </>
   )
}

export default Menu