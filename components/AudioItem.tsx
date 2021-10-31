import React from 'react'
import { Play } from 'utils/Icons'
import { HiOutlineArrowDown } from 'react-icons/hi'

const AudioItem = () => {
  return (
    <li className="group flex items-center justify-between font-semibold py-3 px-3 hover:bg-[#2E2E2E] focus:bg-[#009DE0]">
      <div className="flex items-center space-x-3">
        <div className="bg-[#2e2e2e] group-hover:bg-[#494949] rounded-full">
          <button
            className="group hover:bg-[#575757] rounded-full p-3 active:bg-white"
            title="Play"
          >
            <Play className="w-6 h-6 fill-current text-white" />
          </button>
        </div>
        <a href="#" className="text-white hover:underline" title="text-gray-500 hover:underline">
          Suction Pop 7
        </a>
      </div>
      <a href="#" className="text-gray-500 hover:underline" title="Cartoon">
        Cartoon
      </a>
      <h2 className="text-gray-500" title="Suction Pop, Classic Toy Pop Gun or Cork Prop">
        Suction Pop, Classic Toy Pop Gun or Cork Prop
      </h2>
      <h2 className="text-gray-500">0:00</h2>
      <button
        className="hover:bg-[#575757] rounded-full p-2.5 transition ease-in-out duration-75"
        title="Download"
      >
        <HiOutlineArrowDown className="w-5 h-5 text-white fill-current" />
      </button>
    </li>
  )
}

export default AudioItem
