import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends React.Component{
    clicked() {
        alert("clicked");
    }
    render() {
        return(
            <React.Fragment>
                <Toolbar/>
                <button onClick={() => this.clicked("clicked") } className={classes.Btn}>click</button>
            </React.Fragment>
        );
    }

};

export default Layout;