import { useState } from 'react'
import Head from 'next/head'

import Header from '@/components/organisms/Header'
import Sidebar from '@/components/organisms/Sidebar'
import LandingBody from '@/components/organisms/LandingBody'
import Button from '@/components/atoms/Button'
import Navigation from '@/components/templates/Navigation'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Boketto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Navigation>
          <LandingBody />

          <div style={{ display: 'flex', alignSelf: 'center', margin: '24px' }}>
            <Button href='/start' size='small' text='Empezar a automatizar!' />
          </div>
        </Navigation>
      </main>
    </>
  )
}
