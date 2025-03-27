import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer =
  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.gray100};
    font-size: 1.25rem;
    font-weight: 700;
    flex-wrap: wrap;
  `;

const BaseInputContainer =
  styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.gray500};
    font-weight: 700;
    font-size: inherit;
    padding: 0 0.5rem;
    color: ${(props) => props.theme.gray100};
    
    &::placeholder {
      color: ${(props) => props.theme.gray500};
    }
    
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.green500};
    }
  `;

export const TaskInputContainer =
  styled(BaseInputContainer)`
    flex: 1;
  `;

export const MinutesInputContainer =
  styled(BaseInputContainer)`
    width: 4rem;
  `;

export const CountdownContainer =
  styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme.gray100};
    display: flex;
    gap: 1rem;
    
    span {
      background: ${(props) => props.theme.gray700};
      padding: 2rem 1rem;
      border-radius: 12px;
    }
`;

export const SeparatorContainer =
  styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme.green500};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const StartCountdownButton =
  styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    background: ${(props) => props.theme.green500};
    color: ${(props) => props.theme.gray100};
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    &:not(:disabled):hover {
      background: ${(props) => props.theme.green700};
    }
  `;