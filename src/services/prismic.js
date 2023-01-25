import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'


/**
 * The project's Prismic repository name.
 */
export const ignews = prismic.getRepositoryName('https://ignewsofreact.cdn.prismic.io/api/v2')

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'post',
    path: '/post',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (req ,config = {}) => {
  const client = prismic.createClient(
    process.env.PRISMIC_ENDPOINT, {
    routes,
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}