import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner, Rows } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Head>
        <title>Nitflex-V2</title>
      </Head>
      <Banner />
      <Rows />
    </div>
  )
}

export default Home
