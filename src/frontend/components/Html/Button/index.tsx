import Style from './styles'
import React, { HTMLProps } from 'react'

const Button = (props: HTMLProps<HTMLButtonElement>) => {
  const { type, children } = props

  return (
    <Style type={type || 'button'} {...(props as any)}>
      {children}
    </Style>
  )
}

export default Button
