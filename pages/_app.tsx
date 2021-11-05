import 'styles/tailwind.css'
import type { AppProps } from 'next/app'
import NextProgress from 'lib/next-progress'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <NextProgress />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
