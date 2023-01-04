import { NextApiRequest, NextApiResponse } from 'next'

import { COOK_PROPOSAL_API_KEY, COOK_PROPOSAL_API_URL } from 'consts/app'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${COOK_PROPOSAL_API_URL}/favorite`

  if (req.method === 'POST') {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'x-api-key': COOK_PROPOSAL_API_KEY,
      },
      body: req.body,
    })

    const recipe = await response.json()
    res.status(200).json(recipe)
  }

  res.status(404).end()
}

export default handler
