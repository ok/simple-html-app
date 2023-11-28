import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import '@ui5/webcomponents/dist/Carousel.js'

document.querySelector('#app').innerHTML = `
<style>
img {
    max-height: 30rem;
}
</style>
<ui5-carousel cyclic>
<img src="/assets/sample1.jpg" alt="Landscape 1">
<img src="/assets/sample2.jpg" alt="Landscape 2">
<img src="/assets/sample3.jpg" alt="Bulb">
</ui5-carousel>
`

