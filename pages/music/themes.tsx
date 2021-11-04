import React from 'react'
import Layout from 'layouts/DefaultLayout'
import MusicTabs from 'components/MusicTabs'
import { NextPage } from 'next'

const Themes: NextPage = () => {
  return (
    <Layout headTitle="Featured">
      <MusicTabs />

      <div className="mt-8">
        <h1 className="text-2xl font-semibold text-white">This is Themes</h1>
      </div>
    </Layout>
  )
}

export default Themes
