import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './styles';

const DialogAppBar = ({
  customVariantTitle,
  onClose,
  title
}) => {
  const classes = useStyles();

  return (
    <DialogTitle className={classes.dialogTitle}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            color="inherit"
            variant={customVariantTitle}
          >
            {title}
          </Typography>
          {onClose && (
            <IconButton
              color="inherit"
              aria-label="Close"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </DialogTitle>
  );
};

DialogAppBar.propTypes = {
  customVariantTitle: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired
};

DialogAppBar.defaultProps = {
  customVariantTitle: 'body1'
};

export default DialogAppBar;
