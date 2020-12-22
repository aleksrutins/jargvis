import { Component, createRef } from 'preact';

interface SidebarProps {
    onSearch(searchStr: string): void;
    onAboutClicked(): void;
}
interface SidebarState {
    searching: boolean;
}

export default class Sidebar extends Component<SidebarProps, SidebarState> {
    searchBox = createRef();
    searchBtn = createRef();
    constructor(props) {
        super(props);
        this.state = {searching: false};
    }
    render() {
        return (
            <>
                <div className="sidebar">
                    <button className={"sidebar-btn material-icons md-48" + (this.state.searching? ' toggle-on' : '')} onClick={this.search.bind(this)} ref={this.searchBtn}>search</button>
                    <button className="sidebar-btn material-icons md-48" onClick={this.props.onAboutClicked}>help</button>
                </div>
                {(this.state.searching? <input type="text" className="searchbox" placeholder="Search" ref={this.searchBox} onInput={this.searchBoxKeyPressed.bind(this)} autofocus/> : null)}
            </>
        )
    }
    search() {
        this.setState({searching: !this.state.searching});
        if(this.searchBox.current) {
            this.searchBox.current.focus();
        } else {
            this.searchBtn.current.blur();
        }
    }
    searchBoxKeyPressed() {
        console.log("Searching " + this.searchBox.current.value);
        this.props.onSearch(this.searchBox.current.value);
    }
}