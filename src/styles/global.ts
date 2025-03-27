import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.green500};
  }
  
  body {
    background: ${props => props.theme.gray900};
    color: ${props => props.theme.gray300};
  }
  
  body, input, textarea, button {
    font-family: 'Outfit', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;