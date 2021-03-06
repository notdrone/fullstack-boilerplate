import * as React from 'react'
import { injectGlobal } from 'styled-components'
import Link from 'next/link'

export default () => (
  <div>
    <h1>Dashboard</h1>
    <Link>
      <a href="/a">Signup</a>
    </Link>
  </div>
)

injectGlobal`
  html,
  body,
  div,
  span,
  object,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  header,
  footer,
  section,
  article,
  nav,
  canvas,
  aside,
  figcaption,
  figure,
  hgroup,
  menuitem,
  summary,
  time,
  mark,
  audio,
  video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    }
  *,
    *::before,
    *::after {
    box-sizing: inherit;
    }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  a {
    text-decoration: none;
    }
  :focus {
    outline: 0;
    }
  pre,
    code,
    kbd,
    samp,
    tt {
    font-family: Menlo, 'Courier New', Courier, monospace;
    font-size: 1em;
    }
  /*
    Custom Styles
    ---
    */
    body {
    background: white;
    color: #202020;
    font-size: 1.4rem;
    }
  a {
    color: #202020;
    cursor: pointer;
    transition: color 0.2s ease;
    }
  a:hover {
    color: #000;
    }
  ::selection {
    background-color: #79ffe1;
    }
  ::-moz-selection {
    /* Code for Firefox */
    background: #79ffe1;
    }
  /* Paragraphs */
    p {
    margin-bottom: 16px;
    font-size: 1.2rem;
    }
  /* Helper Classes */
    .text-uppercase {
    text-transform: uppercase;
    }
  /* Helps maintain consistent width */
    .container {
    width: 900px;
    max-width: 100%;
    margin: 0 auto;
    }
  @media (max-width: 900px) {
    .container {
    padding: 0 40px;
    }
    }
`
