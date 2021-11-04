import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import router from 'next/router'
import { Loading } from 'utils/Icons'
import Head from 'next/head'

const Index: NextPage = () => {
  useEffect(() => {
    router.push('/admin/dashboard')
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Free Music and Sound Effect</title>
      </Head>
      <div className="h-screen flex items-center justify-center">
        <Loading className="w-10 h-10 text-[#0F0F0F]" />
      </div>
    </React.Fragment>
  )
}

export default Index
