
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Extras from '../sections/Extras'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhruv Solanki</title>
      </Head>
      <Navbar />
      <main className="space-y-32 mt-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Extras />
        <Contact />
      </main>
    </>
  )
}
