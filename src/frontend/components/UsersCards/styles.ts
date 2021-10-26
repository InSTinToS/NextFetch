import styled from 'styled-components'

export const Card = styled.li.attrs({ className: 'Card' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.background};

  &#error {
    background-color: ${({ theme }) => theme.colors.red};
  }

  > div + div {
    margin-top: 8px;
  }
`

const Style = styled.ul.attrs({ className: 'UsersCards' })`
  ${Card} {
    margin-top: 8px;
  }
`

export default Style
