import Layout from 'components/Layout'
import React from 'react'
import FeaturedSoundEffects from 'sections/sound_effects/FeaturedSoundEffects'

const SoundEffects: React.FC = () => {
  return (
    <Layout headTitle="SFX">
      <div className="mt-8 border-t border-gray-800">
        <h1 className="mt-3 text-xl font-medium">Featured sound effects</h1>
        <FeaturedSoundEffects />
      </div>
    </Layout>
  )
}

export default SoundEffects
