import React from 'react'
import { IconPropsType } from 'typings/common'

const MenuIcon = ({
   width = "50",
   height = "34",
   fill = "black",
   className,
   style
}: IconPropsType) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 50 34"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
         style={style}
      >
         <path
            d="M50 0V5.55556H0V0H50ZM0 33.3333H50V27.7778H0V33.3333ZM0 19.4444H50V13.8889H0V19.4444Z"
            fill={fill}
         />
      </svg>
   )
}

export default MenuIcon