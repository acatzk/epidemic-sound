import React from 'react'
import Layout from 'layouts/DefaultLayout'
import MusicTabs from 'components/MusicTabs'
import { NextPage } from 'next'

const Genres: NextPage = () => {
  return (
    <Layout headTitle="Featured">
      <MusicTabs />

      <div className="mt-8">
        <h1 className="text-2xl font-semibold text-white">This is Genres</h1>
      </div>
    </Layout>
  )
}

export default Genres
