import React from 'react'
import SearchTabs from 'components/SearchTabs'
import Layout from 'layouts/DefaultLayout'
import { NextPage } from 'next'

const Search: NextPage = () => {
  return (
    <Layout headTitle="Sound Effect search | Epidemic Sound">
      <SearchTabs />
    </Layout>
  )
}

export default Search
