import React from 'react'

type ListItemProps = {
   text: string
}

const ListItem = ({
   text,
}: ListItemProps) => {
   return (
      <li className="text-3xl font-semibold mb-1">
         {text}
      </li>
   )
}

export default ListItem