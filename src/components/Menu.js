import React from 'react';
import {throttle} from 'lodash.throttle'
import './Menu.css';

class Menu extends React.Component {

    render() {
        return (
            <div className="menu">
                <ul className="menuList">
                    <li 
                     className={this.props.about ? "menuItem" : "menuItem active"}
                     onClick={() => this.props.toggleAbout(false)}
                    >
                        WORK
                    </li>
                    <li 
                     className={this.props.about ? "menuItem active" : "menuItem"}
                     onClick={() => this.props.toggleAbout(true)}
                    >
                        ABOUT
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;