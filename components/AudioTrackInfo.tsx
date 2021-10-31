import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AudioTrackInfoProps {
  slug: string
  title: string
  image: string
}

const AudioTrackInfo: React.FC<AudioTrackInfoProps> = ({ slug, title, image }) => {
  return (
    <div className="mt-8 flex justify-between">
      <div>
        <div className="flex space-x-3 text-xs text-gray-500">
          <Link href="/sound-effects">
            <a className="uppercase hover:underline font-semibold tracking-widest">Sound Effects</a>
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
  )
}

export default AudioTrackInfo
