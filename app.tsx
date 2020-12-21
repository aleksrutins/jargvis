import { render } from 'preact';
import App from './components/App';
import terms from './terms.json';

render((<App terms={terms.terms}></App>), document.querySelector("#app"));
