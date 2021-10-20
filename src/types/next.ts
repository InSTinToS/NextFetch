import { NextApiRequest, NextApiResponse } from 'next'

export type TNextRoute<ResponseType> = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => void
