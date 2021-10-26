import styled from 'styled-components'

const Style = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  text-align: center;

  input {
    width: 48px;
    height: 32px;
    padding: 0px 8px;
    border-radius: 8px;

    border: none;
  }

  article {
    padding: 8px;
    border-radius: 24px;
    width: clamp(250px, 70vw, 320px);

    background-color: ${({ theme }) => theme.colors.primary};
  }

  #backButton {
    position: absolute;
    top: 24px;
  }

  @media screen and (min-width: 320px) {
    article {
      padding: ${({ theme }) => theme.sizes['3']};
    }
  }
`

export default Style
