import AboutMe from '@/parts/AboutMe'
import Header from '@/parts/Header'
import Interest from '@/parts/Interest'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-screen-md mx-auto flex flex-col gap-8'>
      <Header />
      <AboutMe />
      <Interest />
    </main>
  )
}
