import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import '@ui5/webcomponents/dist/Button.js'

document.querySelector('#app').innerHTML = `
  <ui5-button>Hello UI5 Web Components</ui5-button>
`

