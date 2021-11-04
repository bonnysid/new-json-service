import { createGlobalStyle } from 'styled-components';
import ubuntu from 'assets/fonts/Ubuntu-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "UbuntuRegular";
    src: url(${ubuntu}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  html {
    height: 100%;
  }

  div, button, input {
    box-sizing: border-box;
    border: none;
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    background: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
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
    height: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: SF Pro Text, sans-serif;
    overflow: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  ul[class],
  ol[class] {
    list-style: none;
  }
  
  a {
    text-decoration: none;
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
