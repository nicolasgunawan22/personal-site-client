import React from 'react'
import Image from 'next/image'

type ImageProps = {
   src: string;
   name: string;
}

type ArticleThumbProps = {
   category: string;
   date: string;
   title: string;
   description: string;
   image: ImageProps;
}

function ArticleThumb({
   category,
   date,
   title,
   description,
   image,
}: ArticleThumbProps) {
   return (
      <div className="relative aspect-square">
         <div className="group absolute aspect-square p-4 flex flex-col justify-end gap-2 z-10 text-slate-50 cursor-pointer focus:outline-none hover:opacity-80 focus:ring focus:ring-[#404040]">
            <div className='text-xs text-left flex justify-between items-center translate-y-16 group-hover:translate-y-0 transition-all ease-in-out duration-500'>
               <span className="bg-slate-900 text-white font-bold px-1 py-0.5">{category}</span>
               <span className="font-bold">{date}</span>
            </div>
            <h5 className="text-md text-left font-bold translate-y-16 group-hover:translate-y-0 transition-all ease-in-out duration-500">
               {title}
            </h5>
            <p className='text-xs font-light translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500'>
               {description}
            </p>
         </div>
         <div className="z-0">
            <Image
               src={image.src}
               alt={image.name}
               className='brightness-75'
               layout="fill"
               objectFit="cover"
            />
         </div>
      </div>
   )
}

export default ArticleThumb