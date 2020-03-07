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
}
`