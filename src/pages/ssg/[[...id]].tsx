import { GetStaticPaths, GetStaticProps } from 'next'

import api from 'services/api'

import { UserResType, UsersResType } from 'types/user'

const Ssg = ({ response }) => {
  console.log(response)

  return <div>eba</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = `users/1`
  const response: UsersResType & UserResType = (await api.get(path)).data

  return {
    props: {
      response
    }
  }
}

// remember to run dev before build
export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export default Ssg
