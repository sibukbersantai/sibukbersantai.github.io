import { createClient } from '@sanity/client'
import { sanityConfig } from './config.js'

const client = createClient(sanityConfig)

export default client
