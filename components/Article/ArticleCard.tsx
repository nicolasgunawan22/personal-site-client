import React from 'react'

type ArticleCardProps = {
   title: string
   description: string
   date: string
   slug: string
   timeToRead: number
}

const ArticleCard = ({
   title,
   description,
   date,
   slug,
   timeToRead,
}: ArticleCardProps) => {
   return (
      <a className="flex flex-col gap-2 border-b-2 border-b-black pb-4" href={slug}>
         <h5 className='text-2xl font-semibold'>{title}</h5>
         <p className='text-lg'>{description}</p>
         <span className="flex gap-4">
            <p className='text-sm'>{date}</p>
            <p className='text-sm'>{timeToRead} min read</p>
         </span>
      </a>
   )
}

export default ArticleCard;