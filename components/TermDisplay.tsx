import { h, Component } from 'preact';
import Term from '../util/Term';
export default class TermDisplay extends Component<{term: Term}> {
    render({term}: {term: Term}) {
        return (<div>
            <h2>{term.term}</h2>
            <p>{term.definition}</p>
            <img src={term.img} width="400" height="300"></img>
        </div>
        )
    }
}