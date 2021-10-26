import styled from 'styled-components'

const Style = styled.div`
  button {
    width: 100%;
    padding: ${({ theme }) => theme.margin['3']};
    margin-top: ${({ theme }) => theme.margin['2']};
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};

    & + button {
      margin-top: ${({ theme }) => theme.margin['2']};
    }
  }

  @media screen and (min-width: 500px) {
    button {
      width: auto;

      & + button {
        margin-left: 8px;
      }
    }
  }
`

export default Style
