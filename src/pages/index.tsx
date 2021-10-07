import Style from '../styles/pages/styles'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <ul>
          <li>
            <Link href='/csr'>CSR</Link>
          </li>

          <li>
            <Link href='/ssr'>SSR</Link>
          </li>

          <li>
            <Link href='/ssg'>SSG</Link>
          </li>

          <li>
            <Link href='/isr'>ISR</Link>
          </li>
        </ul>
      </main>
    </Style>
  )
}

export default Home
