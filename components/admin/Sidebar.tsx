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
            <div className="relative h-8 w-8 md:h-28 md:w-28">
              <Image
                className="fill-current rounded-full border"
                layout="fill"
                src="https://bvusolution.com/images/img-profile-default.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div className="hidden md:block text-center">
            <p className="block text-lg text-green-600 pt-2 font-semibold">ADMINISTRATOR</p>
          </div>
        </div>
        <ul className="divide-y divide-gray-700 py-5">
          {adminLinks.map(({ name, path, Icon }, i) => (
            <li
              key={i}
              className={`text-center md:text-left cursor-pointer  hover:bg-gray-900 transition ease-in-out duration-150 ${
                router.pathname === `/admin${path}` && 'bg-gray-900'
              }`}
            >
              <Link href={`/admin${path}`}>
                <a className="flex items-center space-x-0 md:space-x-6 text-gray-300 font-light py-3 pl-0 md:pl-11">
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
