import { h, render } from 'preact';
import App from './components/App';
import terms from './terms.json';
import './styles/app.scss';

render((<App terms={terms.terms}></App>), document.querySelector("#app"));
