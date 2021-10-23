import React from 'react'
import Image from 'next/image'
import { featuredSoundEffects } from 'mock'
import Link from 'next/link'

const FeaturedSoundEffects: React.FC = () => {
  return (
    <section className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-8">
      {featuredSoundEffects.map(({ image, title }, i) => (
        <Link href="/sound_effects/" key={i}>
          <a>
            <div className="overflow-hidden filter hover:brightness-75 transition ease-in-out duration-300">
              <Image
                src={image}
                width={225}
                height={225}
                layout="responsive"
                alt="cartoon"
                placeholder="blur"
                blurDataURL={image}
                objectFit="cover"
              />
            </div>
            <h2 className="mt-3 text-base font-medium">{title}</h2>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default FeaturedSoundEffects
