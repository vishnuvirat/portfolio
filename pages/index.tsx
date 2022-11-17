import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Vishnu Portfolio</title>
      </Head>
        <Header/>
        <div className='snap-center'><Hero/></div>
    </div>
  )
}
