import { NextApiRequest, NextApiResponse } from 'next'

export type NextRoute<ResponseType> = (
  _req: NextApiRequest,
  _res: NextApiResponse<ResponseType>
) => void
