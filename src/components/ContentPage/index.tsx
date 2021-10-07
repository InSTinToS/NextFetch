import Style from './styles'
import { ReactNode } from 'react'

import Link from 'next/link'

interface ContentPageProps {
  children: ReactNode
}

const ContentPage = ({ children }: ContentPageProps) => (
  <Style>
    <Link href='/'>Voltar</Link>

    <article>{children}</article>
  </Style>
)

export default ContentPage
