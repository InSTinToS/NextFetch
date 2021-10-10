import Head from 'next/head'
import { useRouter } from 'next/router'

import Style from './style'

import MiniCard from 'components/MiniCard'

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

          <MiniCard onClick={() => router.push('/isr')}>ISR</MiniCard>
        </ul>
      </main>
    </Style>
  )
}

export default Home
