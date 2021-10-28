export interface ILinks {
  name: string
  path: string
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
    path: '/featured'
  },
  {
    name: 'Genres',
    path: '/genres'
  },
  {
    name: 'Moods',
    path: '/moods'
  },
  {
    name: 'Themes',
    path: '/themes'
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