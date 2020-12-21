import { h, Component } from 'preact';
import Term from "../util/Term";
import TermDisplay from './TermDisplay';

interface AppProps {
    terms: Term[]
}

export default class App extends Component<AppProps> {
    render(props: AppProps) {
        return (<div>
            <h1>Jargon Visualized</h1>
            <hr/>
            {props.terms.map(term => [<TermDisplay term={term}/>, <hr/>])}
        </div>)
    }
}