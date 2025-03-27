import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 12rem);
  margin: 3rem auto;
  padding: 2.5rem;
  
  background: ${(props) => props.theme.gray600};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;