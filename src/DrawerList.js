import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import ProfileList from './ProfileList';

import { Link } from 'react-router-dom';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  button: {
    margin: theme.spacing.unit,
  },
  list: {
    padding: "10px",
  }
});

class DrawerList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.toolbar} />
        <Tooltip id="tooltip-fab" title="Import">
          <Button variant="fab" color="secondary" aria-label="import" className={classes.button}>
            <Icon>file_download_icon</Icon>
          </Button>
        </Tooltip>
        <Tooltip id="tooltip-fab" title="Export">
          <Button variant="fab" color="secondary" aria-label="export" className={classes.button}>
            <Icon>file_upload_icon</Icon>
          </Button>
        </Tooltip>
        <Link to="/settings">
          <Tooltip id="tooltip-fab" title="Settings">
            <Button variant="fab" color="secondary" aria-label="settings" className={classes.button}>
              <Icon>settings_icon</Icon>
            </Button>
          </Tooltip>
        </Link>
        <Link to="/info">
          <Tooltip id="tooltip-fab" title="Info">
            <Button variant="fab" color="secondary" aria-label="info" className={classes.button}>
              <Icon>info_outline_icon</Icon>
            </Button>
          </Tooltip>
        </Link>
        <ProfileList />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(DrawerList);
