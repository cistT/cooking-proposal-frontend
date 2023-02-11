import * as trpcNext from '@trpc/server/adapters/next'

import { createAppContext } from 'server/context'
import { appRouter } from 'server/routers/_app'

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createAppContext,
})
