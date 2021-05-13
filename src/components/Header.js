import React from 'react';
import Menu from './Menu';
import './Header.scss';

class Header extends React.Component {

    render() {
        return (
            <div className={this.props.alignTop ? "top header" : "bottom header"}>
                <Menu 
                 toggleAbout={this.props.toggleAbout} 
                 about={this.props.about}
                />
                
            </div>
        );
    }
}

export default Header;