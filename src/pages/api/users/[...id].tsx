import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {

  const id = request.query
  const users = [
    {
      id: 1,
      nome: 'Dani'
    },
    {
      id: 2,
      nome: 'Diego'
    },
    {
      id: 3,
      nome: 'Mayk'
    }
  ]

  return response.json(users)
}
