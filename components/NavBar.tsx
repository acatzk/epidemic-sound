import React from 'react'
import { Logo } from 'utils/Icons'
import { RiSearch2Line } from 'react-icons/ri'
import Link from 'next/link'
import { navLinks } from 'mock'
import { useRouter } from 'next/router'

const NavBar: React.FC = () => {
  const router = useRouter()

  return (
    <header className="sticky top-0 container max-w-[90rem] py-5 px-6 md:px-16 flex items-center justify-between">
      <Logo className="h-5" />
      <nav>
        <ul className="flex items-center space-x-8">
          {navLinks.map(({ name, path }, i) => (
            <li key={i}>
              <Link href={path}>
                <a
                  className={`font-semibold ${
                    router.pathname === path
                      ? ''
                      : 'text-gray-500 hover:text-white transition ease-in-out duration-100'
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button>
              <RiSearch2Line className="w-5 h-5 text-gray-500 hover:text-white transition ease-in-out duration-100" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
