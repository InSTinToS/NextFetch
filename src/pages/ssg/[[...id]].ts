import { GetStaticPaths, GetStaticProps } from 'next'

import SsgPage from 'pageComponents/Ssg'

import api from 'services/api'

import { UsersResType } from 'types/user'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      { params: { id: [] } },
      { params: { id: ['1'] } },
      { params: { id: ['2'] } }
    ]
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const response: UsersResType = (await api.get(`users`)).data

  return { props: { response } }
}

export default SsgPage
