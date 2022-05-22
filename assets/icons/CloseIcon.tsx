import React from 'react'
import { IconPropsType } from 'typings/common'

const MenuIcon = ({
   width = "30",
   height = "30",
   fill = "black",
   className,
   style
}: IconPropsType) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M4 4L44 44M4 44L44 4L4 44Z"
            stroke={fill}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>

   )
}

export default MenuIcon