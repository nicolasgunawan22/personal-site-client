import React from 'react'
import ListItem from './ListItem'

type ListProps = {
   items: string[],
   title: string,
   handleOnClick: (item: string) => void,
   selected: string,
}

const List = ({
   items = [],
   title = '',
   handleOnClick,
   selected
}: ListProps) => {
   return (
      <div>
         <h3 className="text-2xl text-left mb-2">{title}</h3>
         <ul>
            {items.map((item, index) => (
               <ListItem key={index} item={item} onClick={() => handleOnClick(item)} selected={selected} />
            ))}
         </ul>
      </div>
   )
}

export default List