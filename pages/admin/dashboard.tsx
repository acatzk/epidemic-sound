import { NextPage } from 'next'
import React from 'react'
import Layout from 'layouts/AdminLayout'
import Head from 'next/head'

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div>THIS IS DASHBAORD</div>
    </Layout>
  )
}

export default Dashboard
