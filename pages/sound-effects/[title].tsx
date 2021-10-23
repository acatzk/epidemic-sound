import React from 'react'
import Head from 'next/head'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { soundEffects } from 'mock/sound-effects'
import Image from 'next/image'
import Link from 'next/link'

interface SFXProps {
  initialData: any
}

const SFX: React.FC<SFXProps> = ({ initialData }) => {
  const router = useRouter()
  const { title } = router.query

  return (
    <Layout>
      <Head>
        <title>Royal free {title} sound effect | Epidemic Sound</title>
      </Head>
      <section>
        <h1 className="text-white text-2xl">Hello</h1>
        {soundEffects.map(({ title, image, route }, i) => {
          ;<div key={i} className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-4">
                <Link href="/sound-effects">
                  <a className="uppercase">Sound Effects</a>
                </Link>
                /
                <Link href={route}>
                  <a className="uppercase">title</a>
                </Link>
              </div>
              <h1 className="capitalize text-2xl font-semibold">{title}</h1>
            </div>
            <Image src={image} width={250} height={250} layout="responsive" alt="Image" />
          </div>
        })}
      </section>
    </Layout>
  )
}

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: soundEffects.map(({ title }) => ({
//       params: { title }
//     })),
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = ({ params }) => {
//   return {
//     props: {
//       initialData: soundEffects.find((sfx) => sfx.title == params?.title)
//     }
//   }
// }

export default SFX
