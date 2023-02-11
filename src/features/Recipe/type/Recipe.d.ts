import { z } from 'zod'

export const Recipe = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  image: z.string(),
  cost: z.string(),
  description: z.string(),
  indication: z.string(),
  material: z.string().array(),
})

export type Recipe = z.infer<typeof Recipe>
