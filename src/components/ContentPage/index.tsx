import Style from './styles'
import { ReactNode } from 'react'

import Link from 'next/link'

interface ContentPageProps {
  children: ReactNode
}

const ContentPage = ({ children }: ContentPageProps) => (
  <Style>
    <div id='backButton'>
      <Link href='/'>Voltar</Link>
    </div>

    <article>{children}</article>
  </Style>
)

export default ContentPage
