import React from 'react'
import Head from 'next/head'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import { GET_SFX_SLUGs_QUERY, GET_SFX_BY_SLUG } from 'graphql/queries'

interface SFXProps {
  initialData: any
  params: any
}

const SFX: React.FC<SFXProps> = ({ initialData }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <Head>
        <title>Royal free {slug} sound effect | Epidemic Sound</title>
      </Head>
      <section>
        {initialData.sound_effects.map(({ id, title, image, slug }) => (
          <div key={id} className="mt-8 flex justify-between">
            <div>
              <div className="flex space-x-3 text-xs text-gray-500">
                <Link href="/sound-effects">
                  <a className="uppercase hover:underline font-semibold tracking-widest">
                    Sound Effects
                  </a>
                </Link>
                <span>/</span>
                <Link href={slug}>
                  <a className="uppercase hover:underline font-semibold tracking-widest">{title}</a>
                </Link>
              </div>
              <h1 className="mt-3 capitalize text-4xl tracking-wide font-semibold">{title}</h1>
            </div>
            <div className="relative overflow-hidden w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[290px] lg:h-[295px]">
              <Image
                src={image}
                layout="fill"
                alt={title}
                placeholder="blur"
                blurDataURL={image}
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { sound_effects } = await hasuraAdminClient.request(GET_SFX_SLUGs_QUERY)

  return {
    paths: sound_effects.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      initialData: await hasuraAdminClient.request(GET_SFX_BY_SLUG, {
        slug: params?.slug
      })
    }
  }
}

export default SFX
