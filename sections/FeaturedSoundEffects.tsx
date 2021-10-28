import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedSoundEffectsProps {
  data: any
}

const FeaturedSoundEffects: React.FC<FeaturedSoundEffectsProps> = ({ data }) => {
  return (
    <section className="mt-8 grid grid-cols-3 lg:grid-cols-6 gap-8">
      {data?.sound_effects.map(({ id, image, title, slug }) => (
        <Link href={`/sound-effects/${slug}`} key={id}>
          <a>
            <div className="overflow-hidden filter hover:brightness-75 transition ease-in-out duration-300">
              <Image
                src={image}
                width={225}
                height={225}
                layout="responsive"
                alt={title}
                placeholder="blur"
                blurDataURL={image}
                objectFit="cover"
              />
            </div>
            <h2 className="mt-3 text-base font-medium text-capitalize">{title}</h2>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default FeaturedSoundEffects
