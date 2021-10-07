import styled from 'styled-components'

const Style = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  text-align: center;

  a {
    position: absolute;
    top: 24px;
  }

  input {
    width: 48px;
    height: 32px;
    padding: 0px 8px;
    border-radius: 8px;

    border: none;
  }

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 80vw;
    padding: 24px;
    border-radius: 24px;

    background-color: ${({ theme }) => theme.colors.primary};

    > * {
      margin-top: 24px;
    }
  }
`

export default Style
