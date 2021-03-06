import Head from 'next/head'
import { useRouter } from 'next/router'

import Style from './style'

import MiniCard from 'frontend/components/Minicard'

const Home = () => {
  const router = useRouter()

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <ul>
          <MiniCard onClick={() => router.push('/csr')}>CSR</MiniCard>

          <MiniCard onClick={() => router.push('/ssr')}>SSR</MiniCard>

          <MiniCard onClick={() => router.push('/ssg/1')}>SSG</MiniCard>

          <MiniCard onClick={() => router.push('/isr')}>ISR</MiniCard>
        </ul>
      </main>
    </Style>
  )
}

export default Home
