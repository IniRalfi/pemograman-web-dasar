import './style.css'
import { setupCounter } from './counter.js'

// [ID] Impor file CSS utama dari Bootstrap
// [EN] Import Bootstrap's core CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

// [ID] Impor semua fungsionalitas JavaScript dari Bootstrap
// [EN] Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

setupCounter(document.querySelector('#counter'))
