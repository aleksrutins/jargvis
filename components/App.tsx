import { Component, Fragment, createRef } from 'preact';
import Term from "../util/Term";
import TermDisplay from './TermDisplay';
import Sidebar from './Sidebar';
import Fuse from "fuse.js";

interface AppProps {
    terms: Term[]
}
interface AppState {
    filteredTerms: Term[];
}

export default class App extends Component<AppProps, AppState> {
    termsDiv = createRef();
    constructor(props: AppProps) {
        super(props);
        this.state = {filteredTerms: props.terms};
    }
    render({ }: AppProps, { filteredTerms }: AppState) {
        return (
        <>
            <Sidebar onSearch={this.search.bind(this)}/>
            <div id="main">
                <div className="header">
                    <h1>Jargon Visualized</h1>
                    <hr/>
                </div>
                <div id="terms" ref={this.termsDiv}>
                    {filteredTerms.map(term => 
                        <Fragment key={term.term}>
                            <TermDisplay term={term}/><hr/>
                        </Fragment>
                    )}
                </div>
            </div>
        </>
        )
    }
    search(searchText: string) {
        const { terms } = this.props;
        if(!this.termsDiv.current) return;
        const fuse = new Fuse<Term>(terms, { keys: ["term", "definition"] });
        const result = fuse.search(searchText);
        this.setState({ filteredTerms: result.map(fuseTerm => fuseTerm.item) });
        if(searchText.length == 0) this.setState({ filteredTerms: terms });
    }
}