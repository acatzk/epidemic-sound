import Sidebar from 'components/admin/Sidebar'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <React.Fragment>
      <Head>
        <title>Free Music and Sound Effect | {router.pathname}</title>
      </Head>
      <div className="flex min-h-screen h-screen">
        <div className="w-14 md:w-72 bg-gray-800 border-r border-gray-200 flex-shrink-0">
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default AdminLayout
