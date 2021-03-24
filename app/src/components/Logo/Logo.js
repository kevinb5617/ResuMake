import React from 'react';
import resumakeLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';


const logo = ( props ) => (
    <div className={classes.Logo}>
        <img src={resumakeLogo} alt="ResuMake"/>
    </div>
);

export default logo;