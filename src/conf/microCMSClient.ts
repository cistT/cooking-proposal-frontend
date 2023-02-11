import { createClient } from 'microcms-js-sdk'

import { microCMS } from 'conf'

export const client = createClient({
  serviceDomain: microCMS.SERVICE_DOMAIN,
  apiKey: microCMS.API_KEY,
})
