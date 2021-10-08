import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position="absolute">
            <Toolbar className={classes.toolbar}>
                <div className={classes.firstItem}>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Finance Core
                    </Typography>
                </div>
               
                <NavLink to="/settings" style={{ color: '#fff' }}>
                    <IconButton color="inherit">
                        <Settings/>
                    </IconButton>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
