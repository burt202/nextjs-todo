/** @type {import('next').NextConfig} */

module.exports = {
  publicRuntimeConfig: {
    gqlEndpoint: process.env.GQL_ENDPOINT,
  },
}
