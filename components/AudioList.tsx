import React from 'react'
import AudioItem from './AudioItem'

const AudioList: React.FC = () => {
  return (
    <ul className="mt-3 space-y-2 -mx-4">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 9, 20].map((i) => (
        <AudioItem key={i} />
      ))}
    </ul>
  )
}

export default AudioList
