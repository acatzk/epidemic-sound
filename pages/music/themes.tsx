import React from 'react'
import Layout from 'components/Layout'
import MusicTabs from 'components/MusicTabs'

const Themes: React.FC = () => {
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
