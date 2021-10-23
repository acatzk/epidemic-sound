import { gql } from 'graphql-request'

export const GET_SOUND_EFFECT_FEATURED_QUERY = gql`
  query GetSoundEffectFeaturedQuery {
    sound_effects(where: {isFeatured: {_eq: true}}) {
      id
      image
      route
      title
    }
  }
`