import styled from 'styled-components'

const Style = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  margin: 24px;
  padding: 12px;
  height: 122px;
  cursor: pointer;
  border-radius: 8px;

  width: clamp(250px, 70vw, 320px);

  background-color: ${({ theme }) => theme.colors.primary};
`

export default Style
