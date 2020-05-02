import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
ul {
    list-style-type: none;
    padding: 0;
}
body {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .015em;
    font-weight: var(--glue-font-weight-normal);
    color: #b3b3b3;
    text-transform: none;
    font-family: "Varela Round", sans-serif;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`