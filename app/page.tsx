import AboutMe from '@/parts/AboutMe'
import Footer from '@/parts/Footer'
import Header from '@/parts/Header'
import Interest from '@/parts/Interest'
import PastExperience from '@/parts/PastExperience'
import Skills from '../parts/Skills';
import Honors from '../parts/Honors';
import Project from '../parts/Project';

export default function Home() {
  return (
    <main className='max-w-screen-md mx-auto flex flex-col gap-10'>
      <Header />
      <AboutMe />
      <Interest />
      <PastExperience />
      <Skills />
      <Honors />
      <Project />
      <Footer />
    </main>
  )
}
