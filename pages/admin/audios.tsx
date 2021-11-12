import { NextPage } from 'next'
import React, { useState } from 'react'
import Layout from 'layouts/AdminLayout'
import Head from 'next/head'
import AudioTable from 'components/admin/AudioTable'
import CreateModal from 'components/admin/CreateModal'

const Audios: NextPage = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Admin Audios</title>
      </Head>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-4 py-4 md:py-4">
          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-indigo-800">
              Audio Registration
            </p>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p>Sort By:</p>
              <select className="focus:outline-none bg-transparent ml-1">
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 md:py-4 px-4">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a href="#">
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                  <p>Music</p>
                </div>
              </a>
              <a href="#">
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                  <p>Sound Effects</p>
                </div>
              </a>
            </div>
            <div>
              <button
                className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded transition ease-in-out duration-150"
                onClick={() => setIsOpen(true)}
              >
                <p className="text-sm font-medium leading-none text-white">Add New</p>
              </button>
              <CreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
        <div className="mt-7 overflow-x-auto min-h-screen">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <AudioTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Audios
