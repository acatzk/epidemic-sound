import React from 'react'

const Footer = () => {
  return (
    <footer className="container max-w-[90rem] px-8 md:px-16 py-12 flex flex-wrap text-gray-500 text-base font-medium space-x-0 sm:space-x-6">
      <h2>Copyright &copy; Epidemic Sound</h2>
      <ul className="flex flex-wrap items-center space-x-6">
        <li>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            General
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Cookie
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
