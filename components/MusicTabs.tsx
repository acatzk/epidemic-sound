import React from 'react'
import { tabLinks } from 'mock'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MusicTabs: React.FC = () => {
  const router = useRouter()

  return (
    <div className="mt-4">
      <ul className="flex items-center space-x-6">
        {tabLinks.map(({ name, path }, i) => (
          <li key={i}>
            <Link href={`/music/${path}`}>
              <a
                className={`text-xl font-semibold ${
                  router.pathname.includes(path)
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
    </div>
  )
}

export default MusicTabs
