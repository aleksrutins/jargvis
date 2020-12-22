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
    aboutDlg = createRef();
    constructor(props: AppProps) {
        super(props);
        this.state = {filteredTerms: props.terms};
    }
    render({ }: AppProps, { filteredTerms }: AppState) {
        return (
        <>
            <Sidebar onSearch={this.search.bind(this)} onAboutClicked={this.aboutClicked.bind(this)}/>
            <div id="main">
                <div className="header">
                    <h1>Jargon Visualized</h1>
                </div>
                <div id="terms" ref={this.termsDiv}>
                    {filteredTerms.map(term => 
                        <TermDisplay term={term}/>
                    )}
                </div>
                <dialog className="about-dialog" ref={this.aboutDlg}>
                    <button className="close-dialog" onClick={() => this.aboutDlg.current.removeAttribute('open')}>&times;</button>
                    <h1>About</h1>
                    <p>
                        Created with:
                        <ul>
                            <li>Preact</li>
                            <li>TypeScript</li>
                            <li>Gitpod</li>
                            <li>Material Icons</li>
                            <li>Parcel</li>
                        </ul>
                    </p>
                </dialog>
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
    aboutClicked() {
        this.aboutDlg.current.setAttribute("open", "");
    }
}