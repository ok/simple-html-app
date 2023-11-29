import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-theming/dist/Assets.js"
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import '@ui5/webcomponents/dist/Carousel.js'
import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/CardHeader.js'
import '@ui5/webcomponents/dist/List.js'
import '@ui5/webcomponents/dist/ListItem.js'
import "@ui5/webcomponents/dist/StandardListItem.js"

setTheme("sap_horizon");