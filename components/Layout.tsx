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
      <React.Fragment>
        <NavBar />
        <main className="container max-w-[90rem] px-8 md:px-16 min-h-screen">{children}</main>
        <Footer />
      </React.Fragment>
    </React.Fragment>
  )
}

export default Layout
