import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  svg {
    width: 24px;

    color: ${({ theme }) => theme.colors.primary};
  }
`

export default Style
