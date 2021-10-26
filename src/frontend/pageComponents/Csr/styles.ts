import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  #notFound {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 86px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors};
  }

  > * {
    width: 100%;
    margin-top: ${({ theme }) => theme.sizes['2']};
  }
`

export default Style
