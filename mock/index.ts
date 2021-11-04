import { IconType } from 'react-icons/lib'
import { MdDashboard } from 'react-icons/md'
import { SiAudacity } from 'react-icons/si'
import { BsTag } from 'react-icons/bs'

export interface ILinks {
  name: string
  path: string,
  Icon?: IconType
}

export const navLinks: ILinks[] = [
  {
    name: 'Music',
    path: '/music/featured'
  },
  {
    name: 'Sound Effects',
    path: '/sound-effects'
  },
]

export const tabLinks: ILinks[] = [
  {
    name: 'Featured',
    path: 'featured'
  },
  {
    name: 'Genres',
    path: 'genres'
  },
  {
    name: 'Moods',
    path: 'moods'
  },
  {
    name: 'Themes',
    path: 'themes'
  }
]

export const searchLinks: ILinks[] = [
  {
    name: 'Music',
    path: '/music/search'
  },
  {
    name: 'Sound Effects',
    path: '/sound-effects/search'
  },
]

export const adminLinks = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    Icon: MdDashboard
  },
  {
    name: 'Audios',
    path: '/audios',
    Icon: SiAudacity
  },
  {
    name: 'Tags',
    path: '/tags',
    Icon: BsTag
  }
]