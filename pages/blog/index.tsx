import React from 'react'
import Head from 'next/head'
import Container from 'components/Container/Container'
import ArticleCard from 'components/Article/ArticleCard'
const Blog = () => {
   return (
      <div>
         <Head>
            <title>Nicolas Gunawan</title>
            <meta name="description" content="Nicolas gunawan personal website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Container haveMenuButton={false}>
            <h2 className="text-3xl font-semibold mb-1 text-center mt-16">Blog</h2>
            <div className="p-20">
               <ArticleCard
                  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. iste natus error sit voluptatem accusantium doloremque  doloremque laudantium. iste natus error."
                  date="May 21, 2022"
                  slug='blog/article-1'
                  timeToRead={1}
               />
               <ArticleCard
                  title='Lorem consectetur adipiscing elit'
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. iste natus error sit voluptatem accusantium doloremque  doloremque laudantium. iste natus error."
                  date="May 21, 2022"
                  slug='blog/article-2'
                  timeToRead={5}
               />
            </div>
         </Container>
      </div>
   )
}

export default Blog