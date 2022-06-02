import React from 'react'
import ListItem from './ListItem'

type ListProps = {
   items: string[],
   title: string,
}

const List = ({
   items = [],
   title = '',
}: ListProps) => {
   return (
      <div>
         <h3 className="text-2xl text-left mb-2">{title}</h3>
         <ul>
            {items.map((item, index) => (
               <ListItem key={index} text={item} />
            ))}
         </ul>
      </div>
   )
}

export default List