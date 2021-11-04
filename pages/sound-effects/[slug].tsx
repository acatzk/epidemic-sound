import React from 'react'
import Head from 'next/head'
import Layout from 'layouts/DefaultLayout'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import { GET_SFX_SLUGs_QUERY, GET_SFX_BY_SLUG } from 'graphql/queries'
import AudioTrackinfo from 'components/AudioTrackInfo'
import AudioList from 'components/AudioList'

interface SFXProps {
  initialData: any
}

const SFX: NextPage<SFXProps> = ({ initialData }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <Head>
        <title>Royal free {slug} sound effect | Epidemic Sound</title>
      </Head>
      <section>
        {initialData.sound_effects.map(({ slug, title, image }, i) => (
          <AudioTrackinfo key={i} slug={slug} title={title} image={image} />
        ))}
      </section>
      <section>
        <div className="mt-16 border-t border-gray-800">
          <AudioList />
        </div>
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

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      initialData: await hasuraAdminClient.request(GET_SFX_BY_SLUG, {
        slug: params?.slug
      })
    }
  }
}

export default SFX
