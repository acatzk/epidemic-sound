import Layout from 'components/Layout'
import { NextPage } from 'next'
import React from 'react'
import FeaturedSoundEffects from 'sections/FeaturedSoundEffects'
import { GetStaticProps } from 'next'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import { GET_SOUND_EFFECT_FEATURED_QUERY } from 'graphql/queries'

interface SoundEffectsProps {
  initialData: any
}

const SoundEffects: NextPage<SoundEffectsProps> = ({ initialData }) => {
  return (
    <Layout headTitle="SFX">
      <div className="mt-8 border-t border-gray-800">
        <h1 className="mt-3 text-xl font-medium">Featured sound effects</h1>
        <FeaturedSoundEffects data={initialData} />
        <h1 className="mt-14 py-3 border-t border-gray-800 text-xl font-medium">
          All sound effects
        </h1>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await hasuraAdminClient.request(GET_SOUND_EFFECT_FEATURED_QUERY)

  return {
    props: {
      initialData
    },
    revalidate: 1
  }
}

export default SoundEffects
