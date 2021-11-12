import React from 'react'
import Image from 'next/image'
import { adminLinks } from 'mock'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar: React.FC = () => {
  const router = useRouter()

  return (
    <aside>
      <div className="flex flex-col justify-center py-14 space-y-2">
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 px-0 md:px-4">
            <div className="relative h-8 w-8 md:h-28 md:w-28 transition-all ease-in-out duration-500">
              <Image
                className="fill-current rounded-full border"
                layout="fill"
                src="/assets/images/profile.png"
                alt="avatar"
              />
            </div>
          </div>
          <div className="hidden md:block text-center">
            <p className="block text-lg text-indigo-100 pt-2 font-semibold transition-all ease-in-out duration-500">
              ADMINISTRATOR
            </p>
          </div>
        </div>
        <ul className="divide-y divide-indigo-700 py-5">
          {adminLinks.map(({ name, path, Icon }, i) => (
            <li
              key={i}
              className={`text-center md:text-left cursor-pointer  hover:bg-indigo-800 transition ease-in-out duration-150 ${
                router.pathname === `/admin${path}` && 'bg-indigo-800'
              }`}
            >
              <Link href={`/admin${path}`}>
                <a className="flex items-center space-x-0 md:space-x-6 text-indigo-300 font-light py-3 pl-0 md:pl-11">
                  <Icon className="ml-3.5 w-6 h-6 text-white" />
                  <span className="hidden md:block">{name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
