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
    path: '/music/featured'
  },
  {
    name: 'Genres',
    path: '/music/genres'
  },
  {
    name: 'Moods',
    path: '/music/moods'
  },
  {
    name: 'Themes',
    path: '/music/themes'
  }
]