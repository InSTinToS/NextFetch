import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  main ul {
    .MiniCard + .MiniCard {
      margin-top: 24px;
    }
  }
`

export default Style
