import { NextApiRequest, NextApiResponse } from 'next'

export interface TDefaultRes {
  message: string
  success: boolean
}

export type TNextRoute<ResponseType> = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => Promise<any>
