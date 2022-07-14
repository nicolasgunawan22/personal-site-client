import React from 'react'

type ListItemProps = {
   item: string,
   onClick: () => void,
   selected: string
}

const ListItem = ({
   item,
   onClick,
   selected
}: ListItemProps) => {
   return (
      <li
         className={`text-3xl font-semibold mb-1 cursor-pointer transition-all duration-300 ${selected === item ? 'translate-x-16' : 'hover:translate-x-5'}`}
         onClick={onClick}
      >
         {item}
      </li>
   )
}

export default ListItem