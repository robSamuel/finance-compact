import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Header from '../Header';

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/** TODO: Add the Drawer here */}
            <div className={classes.container}>
                <Header />
                <main className={classes.content}>
                    <div className={classes.childrenContainer}>
                        { children }
                    </div>
                </main>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
