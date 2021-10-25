import { NextApiRequest, NextApiResponse } from 'next'

interface TDefaultRes {
  message: string
  success: boolean
}

export type TNextRoute<ResponseType> = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType extends TDefaultRes>
) => Promise<ResponseType extends TDefaultRes>
