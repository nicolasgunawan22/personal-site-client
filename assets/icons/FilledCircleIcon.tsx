import React from 'react'
import { IconPropsType } from 'types/common'

function FilledCircleIcon({
   width = "10",
   height = "10",
   fill = "#404040",
   className,
   style
}: IconPropsType) {
   return (
      <svg
         className={className}
         width={width}
         height={height}
         viewBox="0 0 10 10"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         style={style}
      >
         <circle cx="5" cy="5" r="5" fill={fill} />
      </svg>
   )
}

export default FilledCircleIcon