import getConfig from "next/config"

const publicRuntimeConfig = getConfig().publicRuntimeConfig

const config = {
  gqlEndpoint: publicRuntimeConfig.gqlEndpoint as string,
}

export default config
