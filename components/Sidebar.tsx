import { Component, createRef } from 'preact';

interface SidebarProps {
    onSearch(searchStr: string): void;
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
                    <button className="sidebar-btn material-icons md-48" onClick={this.search.bind(this)} ref={this.searchBtn}>search</button>
                </div>
                {(this.state.searching? <input type="text" className="searchbox" placeholder="Search" ref={this.searchBox} onInput={this.searchBoxKeyPressed.bind(this)} autofocus/> : null)}
            </>
        )
    }
    search() {
        this.setState({searching: !this.state.searching});
        if(this.state.searching) {
            this.searchBox.current.focus();
            this.searchBtn.current.classList.add('toggle-on');
        } else {
            this.searchBtn.current.blur();
            this.searchBtn.current.classList.remove('toggle-on');
        }
    }
    searchBoxKeyPressed() {
        this.props.onSearch(this.searchBox.current.value);
    }
}