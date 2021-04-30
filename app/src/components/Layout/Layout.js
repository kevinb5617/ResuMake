import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';

class Layout extends React.Component{
    clicked() {
        alert("clicked");
    }
    render() {
        return(
            <React.Fragment>
                <Toolbar/>
                <button onClick={() => this.clicked("clicked") } className={classes.StartBtn}>get started</button>
            </React.Fragment>
        );
    }

};

export default Layout;