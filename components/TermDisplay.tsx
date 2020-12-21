import { h, Component } from 'preact';
import Term from '../util/Term';
import {imgUrl} from '../util/imgUrl';
export default class TermDisplay extends Component<{term: Term}> {
    render({term}: {term: Term}) {
        return (<div>
            <h2>{term.term}</h2>
            <p>{term.definition}</p>
            <img src={imgUrl(term.img)} width="400" height="300" alt={term.term} title={term.term}></img>
        </div>
        )
    }
}