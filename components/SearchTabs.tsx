import React from 'react'
import Link from 'next/link'
import { searchLinks } from 'mock'
import { useRouter } from 'next/router'
import { CgSearch } from 'react-icons/cg'

const SearchTabs = () => {
  const router = useRouter()

  return (
    <div className="mt-4">
      <ul className="flex items-center space-x-6">
        {searchLinks.map(({ name, path }, i) => (
          <li key={i}>
            <Link href={path}>
              <a
                className={`text-xl font-semibold ${
                  router.pathname === path
                    ? 'text-white  border-b-2 border-white pb-1'
                    : 'text-gray-500'
                } hover:text-white transition ease-in-out duration-100`}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <div className="relative flex items-center">
          <CgSearch className="absolute ml-4 w-6 h-6 text-gray-500" />
          <input
            type="text"
            className="py-5 pl-12 text-base w-full bg-transparent border border-gray-500 hover:border-white rounded-none focus:outline-none transition ease-in-out duration-300"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchTabs
