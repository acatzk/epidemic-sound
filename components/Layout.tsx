import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  headTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, headTitle }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Free Music and Sound Effect | {headTitle}</title>
      </Head>
      <div className="bg-[#0F0F0F] min-h-screen text-white">
        <NavBar />
        <main className="container max-w-[90rem] px-8 md:px-16 min-h-screen">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
