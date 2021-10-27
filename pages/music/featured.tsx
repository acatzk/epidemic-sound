import React from 'react'
import Layout from 'components/Layout'
import MusicTabs from 'components/MusicTabs'

const Featured: React.FC = () => {
  return (
    <Layout headTitle="Featured">
      <MusicTabs />

      <div className="mt-8">
        <h1 className="text-2xl font-semibold text-white">This is Featured</h1>
      </div>
    </Layout>
  )
}

export default Featured
