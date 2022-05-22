import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from 'components/Container/Container'

import me from 'public/images/me.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicolas Gunawan</title>
        <meta name="description" content="Nicolas gunawan personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <section id="#" className="min-h-screen flex justify-center items-center gap-8">
          <div className="flex flex-col justify-start items-start gap-8">
            <h1 className="text-5xl text-left">
              Hi, I&apos;m <span className="font-bold">Nicolas Gunawan</span><br />
              <span className="font-bold">Full Stack Engineer</span>
            </h1>
            <h2 className="text-2xl text-left">
              Based in Jakarta, Indonesia
            </h2>
          </div>
          <div className="rounded-full border-4 border-black border-solid">
            <Image
              src={me}
              alt="me"
              className="rounded-full"
              width={250}
              height={250}
            />
          </div>
        </section>
        <section id="#project" className="min-h-screen flex flex-col justify-center items-start gap-8">
          <div>
            <h3 className="text-2xl text-left mb-2">
              personal
            </h3>
            <ul className="" >
              <li className="text-3xl font-semibold mb-1">
                bellyminer
              </li>
              <li className="text-3xl font-semibold mb-1">
                earthlone
              </li>
              <li className="text-3xl font-semibold mb-1">
                hotcube
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-left mb-2">
              work
            </h3>
            <ul className="">
              <li className="text-3xl font-semibold mb-1">
                sirclo
              </li>
              <li className="text-3xl font-semibold mb-1">
                ccs
              </li>
            </ul>
          </div>
        </section>
        <section id="#blog" className="min-h-screen flex flex-col justify-center items-start gap-8">
          <div className="flex justify-between w-1/2 mx-auto border-b-2 border-b-[#202020] pb-2">
            <h3>latest article</h3>
            <button className="font-bold">see all</button>
          </div>
          <div>

          </div>
        </section>
      </Container>

      <footer>

      </footer>
    </div>
  )
}

export default Home
