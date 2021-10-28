import { gql } from 'graphql-request'

export const GET_SFX_FEATURED_QUERY = gql`
  query GetSFXFeaturedQuery {
    sound_effects(where: {isFeatured: {_eq: true}}, order_by: {count: asc}) {
      id
      image
      title
      slug
    }
  }
`

export const GET_SFX_SLUGs_QUERY = gql`
  query GetSFXTitleQuery {
    sound_effects {
      id
      slug
    }
  }
`

export const GET_SFX_BY_SLUG = gql`
  query GetSFXFeaturedBySlugQuery($slug: String!) {
    sound_effects(where: {isFeatured: {_eq: true}, _and: {slug: {_eq: $slug}}}) {
      id
      image
      title
      slug
    }
  }
`