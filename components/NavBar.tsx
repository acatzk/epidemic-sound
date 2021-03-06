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

  function goToSearch() {
    return router.pathname === '/music/featured'
      ? router.push('/music/search')
      : router.push('/sound-effects/search')
  }

  return (
    <header className="sticky top-0 bg-[#0F0F0F] container max-w-[90rem] py-5 px-8 md:px-16 flex items-center justify-between z-50">
      <Link href="/music/featured">
        <a>
          <Logo className="h-5" />
        </a>
      </Link>
      <nav>
        <ul className="flex items-center space-x-8">
          <li className="hidden md:block">
            <Link href="/music/featured">
              <a
                className={`font-semibold ${
                  router.pathname.includes('/music')
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white transition ease-in-out duration-75'
                }`}
              >
                Music
              </a>
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/sound-effects">
              <a
                className={`font-semibold ${
                  router.pathname.includes('/sound-effects')
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white transition ease-in-out duration-75'
                }`}
              >
                Sound Effects
              </a>
            </Link>
          </li>
          <li>
            <button onClick={goToSearch}>
              <RiSearch2Line className="w-5 h-5 text-white md:text-gray-500 hover:text-white transition ease-in-out duration-75" />
            </button>
          </li>
          <MobileDropdownMenu />
        </ul>
      </nav>
    </header>
  )
}

function MobileDropdownMenu() {
  return (
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
              <Link href="/music/featured">
                <a className="font-medium py-2 px-3 hover:bg-gray-800 transition ease-in-out duration-150">
                  Music
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/sound-effects">
                <a className="font-medium py-2 px-3 hover:bg-gray-800 transition ease-in-out duration-150">
                  Sound Effects
                </a>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

export default NavBar
