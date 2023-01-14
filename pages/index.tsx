import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <Head>
        <title>Nitflex-V2</title>
      </Head>
      <Banner />
    </div>
  )
}

export default Home
