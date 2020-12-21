import { render } from 'preact';
import App from './components/App';
import Term from './util/Term';
import terms from './terms.json';

render((<App terms={terms.terms}></App>), document.querySelector("#app"));
