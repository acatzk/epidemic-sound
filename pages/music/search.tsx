import React from 'react'
import SearchTabs from 'components/SearchTabs'
import Layout from 'layouts/DefaultLayout'
import { NextPage } from 'next'

const Search: NextPage = () => {
  return (
    <Layout headTitle="Music search | Epidemic Sound">
      <SearchTabs />
    </Layout>
  )
}

export default Search
