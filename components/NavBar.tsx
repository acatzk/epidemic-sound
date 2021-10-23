import React, { Fragment } from 'react'
import { Logo } from 'utils/Icons'
import { RiSearch2Line } from 'react-icons/ri'
import Link from 'next/link'
import { navLinks } from 'mock'
import { useRouter } from 'next/router'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { Menu, Transition } from '@headlessui/react'

const NavBar: React.FC = () => {
  const router = useRouter()

  return (
    <header className="sticky top-0 bg-[#0F0F0F] container max-w-[90rem] py-5 px-6 md:px-16 flex items-center justify-between">
      <Logo className="h-5" />
      <nav>
        <ul className="flex items-center space-x-8">
          {navLinks.map(({ name, path }, i) => (
            <li key={i} className="hidden md:block">
              <Link href={path}>
                <a
                  className={`font-semibold ${
                    router.pathname === path
                      ? 'text-white'
                      : 'text-gray-500 hover:text-white transition ease-in-out duration-75'
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button>
              <RiSearch2Line className="w-5 h-5 text-white" />
            </button>
          </li>
          <li className="block md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <HiOutlineDotsHorizontal className="w-5 h-5 text-white" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 flex flex-col overflow-hidden w-56 mt-2 origin-top-right bg-[#1a1a1a] divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <Link href="/">
                      <a className="font-medium py-2 px-3 hover:bg-gray-800 transition ease-in-out duration-150">
                        Music
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/sound_effects">
                      <a className="font-medium py-2 px-3 hover:bg-gray-800 transition ease-in-out duration-150">
                        Sound Effects
                      </a>
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
