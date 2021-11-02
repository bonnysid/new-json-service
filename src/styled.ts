import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from 'constants/utils';

export const GlobalStyle = createGlobalStyle`
  div, button, input {
    box-sizing: border-box;
    border: none;
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #root {
    min-height: 100vh;
  }
  
  ul[class],
  ol[class] {
    padding: 0;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  
  ul[class],
  ol[class] {
    list-style: none;
  }
  
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  article > * + * {
    margin-top: 1em;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${COLORS.background};
  font-family: Roboto, sans-serif;
  color: ${COLORS.black};
`;

export const Container = styled.div`
  max-width: 1080px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
`;
