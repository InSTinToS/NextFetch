import styled from 'styled-components'

export const Card = styled.li.attrs({ className: 'Card' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: ${({ theme }) => theme.sizes['2']};
  border-radius: ${({ theme }) => theme.sizes['2']};

  background-color: ${({ theme }) => theme.colors.background};

  &#error {
    background-color: ${({ theme }) => theme.colors.red};
  }

  > div + div {
    margin-top: ${({ theme }) => theme.sizes['2']};
  }
`

const Style = styled.ul.attrs({ className: 'UsersCards' })`
  ${Card} {
    margin-top: 8px;
  }
`

export default Style
