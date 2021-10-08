import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Style, { CardLi } from './style'

const Home = ({}) => {
  const router = useRouter()

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <ul>
          <CardLi onClick={() => router.push('/csr')}>CSR</CardLi>

          <CardLi onClick={() => router.push('/ssg')}>
            <Link href='/ssg'>SSG</Link>
          </CardLi>
        </ul>
      </main>
    </Style>
  )
}

export default Home
