import React from 'react'
import Link from 'next/link'
import FilledCircleIcon from 'assets/icons/FilledCircleIcon'

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
      <Link href={slug}>
         <a className="flex flex-col gap-2 border-b-2 border-b-black pb-4 mb-4" >
            <h5 className='text-2xl font-semibold'>{title}</h5>
            <p className='text-lg'>{description}</p>
            <span className="flex gap-4 items-center">
               <p className='text-sm'>{date}</p>
               <FilledCircleIcon
                  width='8'
                  height='8'
                  fill="#404040"
               />
               <p className='text-sm'>{timeToRead} min read</p>
            </span>
         </a>
      </Link>
   )
}

export default ArticleCard;