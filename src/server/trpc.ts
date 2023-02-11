import { initTRPC } from '@trpc/server'

import { createAppContext } from './context'

const t = initTRPC.context<typeof createAppContext>().create()

export const router = t.router
export const procedure = t.procedure
