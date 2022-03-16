import "../styles/global.css"

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import {AppProps} from "next/app"

import config from "../config"

const httpLink = createHttpLink({
  uri: config.gqlEndpoint,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
