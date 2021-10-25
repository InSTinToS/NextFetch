import styled from 'styled-components'

const Style = styled.div.attrs({ className: 'MiniCard' })`
  display: grid;
  align-items: center;
  justify-content: center;

  height: 122px;
  cursor: pointer;
  border-radius: 8px;
  width: clamp(250px, 70vw, 320px);

  background-color: ${({ theme }) => theme.colors.primary};
`

export default Style
