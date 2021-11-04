import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#009DE0"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextProgress
