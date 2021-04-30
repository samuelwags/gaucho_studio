import React from 'react';
import GauchoSVG from './GauchoSVG';
import About from './About';
import Menu from './Menu';
import './Header.css';

class Header extends React.Component {
    state = {
        alignTop: true,
        about: false
    }

    componentDidMount() {
        window.addEventListener('wheel', this.watchScroll);
    }

    watchScroll = (event) => {
        if (event.deltaY > 0) {
            this.setState({alignTop: false});
        } else {
            this.setState({alignTop: true});
        }
    }

    toggleTopAlign = (newAlignTop = !this.state.alignTop) => {
        this.setState({alignTop: newAlignTop});
    }

    toggleAbout = (newAbout = !this.state.about) => {
        if (newAbout && this.state.alignTop) {
            this.setState({about: newAbout, alignTop: false});
        } else if (!newAbout && !this.state.alignTop) {
            this.setState({about: newAbout, alignTop: true})
        } else {
            this.setState({about: newAbout});
        }
    }

    render() {
        return (
            <div className={this.state.alignTop ? "top header" : "bottom header"}>
                {this.state.about ? <About /> : ""}
                <Menu 
                 toggleAbout={this.toggleAbout} 
                 about={this.state.about}
                />
                <GauchoSVG />
            </div>
        );
    }
}

export default Header;