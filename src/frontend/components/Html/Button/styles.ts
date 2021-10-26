import styled from 'styled-components'

const Style = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: ${({ theme }) => theme.sizes['3']};
  margin-top: ${({ theme }) => theme.sizes['2']};

  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};

  & + button {
    margin-top: ${({ theme }) => theme.sizes['2']};
  }

  @media screen and (min-width: 500px) {
    width: auto;

    & + button {
      margin-left: 8px;
    }
  }
`

export default Style
