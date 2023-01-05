import { NextApiRequest, NextApiResponse } from 'next'

import { COOK_PROPOSAL_API_KEY, COOK_PROPOSAL_API_URL } from 'consts/app'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${COOK_PROPOSAL_API_URL}/news`

  if (req.method === 'GET') {
    const response = await fetch(url, {
      headers: {
        'x-api-key': COOK_PROPOSAL_API_KEY,
      },
    })

    const news = await response.json()
    res.status(200).json(news)
  }

  res.status(404).end()
}

export default handler