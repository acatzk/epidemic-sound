/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  },
  images: {
    domains: [
      'images.ctfassets.net'
    ]
  }
}
