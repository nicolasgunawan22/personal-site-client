import React from 'react'
import Head from 'next/head'
import Container from 'components/Container/Container'


type ArticleProps = {
   title: string
   description: string
   date: string
   timeToRead: number
   body: string
}

const Article = ({
   title,
   description,
   date,
   timeToRead,
   body
}: ArticleProps) => {
   return (
      <div>
         <Head>
            <title>Nicolas Gunawan</title>
            <meta name="description" content="Nicolas gunawan personal website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Container haveMenuButton={false}>
            <div className="p-20">
               <h2 className="text-3xl font-semibold mb-1 text-center mt-16">{title}</h2>
               <p className="text-gray-600 text-center mb-4">{date}</p>
               <p className="text-gray-600 text-center mb-4">{timeToRead} min read</p>
               <p className="text-gray-600 text-center mb-4">{description}</p>
               <div className="text-gray-600 text-center mb-4">
                  {body}
               </div>

               <h3>Further Reading</h3>
               <ul>
                  <li>
                     <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <span className="text-gray-600">
                           <i className="fas fa-play"></i>
                        </span>
                        <span className="ml-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                     </a>
                  </li>
               </ul>
            </div>
         </Container>
      </div>
   )
}

export default Article

export async function getStaticPaths() {
   // const articles = await axios.get(process.env.SERVER_URL + "articles/")
   // const paths = articles.data.map(article => {
   //    return {
   //       params: {
   //          slug: article["slug"],
   //       }
   //    }
   // })
   // return {
   //    paths,
   //    fallback: false,
   // }
}

export async function getStaticProps({ params }: any) {
   // const article = await axios.get(process.env.SERVER_URL + `articles/${params.slug}`)
   // if (!article) return { notFound: true }

   // return {
   //    props: {
   //       article: article.data,
   //    },
   //    revalidate: 10,
   // }
}