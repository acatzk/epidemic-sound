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
        <div className="w-14 md:w-72 bg-indigo-900 border-r border-gray-200 flex-shrink-0 transition-all ease-in-out duration-500">
          <Sidebar />
        </div>
        <main className="overflow-y-auto w-full">{children}</main>
      </div>
    </React.Fragment>
  )
}

export default AdminLayout
