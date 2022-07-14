import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Container from 'components/Container/Container'
import List from 'components/List/List'

import me from 'public/images/me.png'

const Home: NextPage = () => {
  const [showProject, setShowProject] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<string>('')
  function handleOnClickListItem(item: string) {
    setShowProject(true)
    setSelectedProject(item)
  }

  return (
    <div>
      <Head>
        <title>Nicolas Gunawan</title>
        <meta name="description" content="Nicolas gunawan personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <section id="#" className="relative min-h-screen flex justify-center items-center gap-8">
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
          <div className="absolute bottom-0 mb-12 text-center">
            <h5 className="text-lg font-bold">Daily Quotes</h5>
            <p>Have the courage to follow your heart and intuition. They somehow know what you truly want to become. - Steve Jobs</p>
          </div>
        </section>

        <section id="#project" className="relative min-h-screen flex flex-col justify-center items-start gap-8">
          <List
            title="personal"
            items={['bellyminer', 'earthlone', 'hotcube']}
            handleOnClick={handleOnClickListItem}
            selected={selectedProject}
          />
          <List
            title="work"
            items={['sirclo', 'ccs']}
            handleOnClick={handleOnClickListItem}
            selected={selectedProject}
          />
          <div className={`absolute right-0 text-center w-[35vw] h-[80vh] bg-slate-100 ${showProject ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all`}>
            {selectedProject}
          </div>
        </section>
        <section id="#blog" className="min-h-screen flex flex-col justify-center items-start gap-8">
          <div className="flex justify-between w-3/4 mx-auto border-b-2 border-b-[#202020] pb-2">
            <h3>latest article</h3>
            <Link href="/blog">
              <a className="font-bold">see all</a>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto gap-4">
            {[1, 2, 3].map((i, index) => (
              <div key={index} className="relative aspect-square">
                <div className="group absolute aspect-square p-4 flex flex-col justify-end gap-2 z-10 text-slate-50 cursor-pointer focus:outline-none hover:opacity-80 focus:ring focus:ring-[#404040]">
                  <div className='text-xs text-left flex justify-between items-center translate-y-16 group-hover:translate-y-0 transition-all ease-in-out duration-500'>
                    <span className="bg-slate-900 text-white font-bold px-1 py-0.5">Coding</span>
                    <span className="font-bold">2020-01-01</span>
                  </div>
                  <h5 className="text-md text-left font-bold translate-y-16 group-hover:translate-y-0 transition-all ease-in-out duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint eveniet consectetur.
                  </h5>
                  <p className='text-xs font-light translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-500'>
                    Nam vero explicabo blanditiis commodi earum quae mollitia! Fuga, ad cumque dicta ab distinctio facilis repellat mollitia?
                  </p>
                </div>
                <div className="z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1475823678248-624fc6f85785?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                    alt="me"
                    className='brightness-75'
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="#blog" className="min-h-screen flex flex-col justify-center items-center gap-12">
          <h2 className='text-2xl font-bold'>contact me</h2>
          <form className='flex flex-col gap-4 w-2/3' onSubmit={() => { }}>
            <div className='flex gap-4'>
              <input placeholder="Your Name" className="bg-transparent border-2 border-[#202020] p-2 w-full" type="text" />
              <input placeholder="Your Email" className="bg-transparent border-2 border-[#202020] p-2 w-full" type="text" />
            </div>
            <input placeholder="Subject" className="bg-transparent border-2 border-[#202020] p-2 w-full" type="text" />
            <textarea placeholder="Message" className="bg-transparent border-2 border-[#202020] p-2 w-full" rows={8}></textarea>
            <button className='text-lg px-6 py-3 bg-[#D9D9D9] mx-auto drop-shadow-lg hover:bg-[#202020] hover:text-white transition-all ease-in-out' type="submit">Send Message</button>
          </form>
        </section>
      </Container>

      <footer>

      </footer>
    </div>
  )
}

export default Home
