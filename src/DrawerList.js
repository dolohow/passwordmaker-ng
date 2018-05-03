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
  drawerList: {
    paddingTop: "10px"
  }
});

class DrawerList extends React.Component {
  render() {
    const { classes, handleDrawerToggle } = this.props;

    const options = [
      { icon: 'file_download_icon', tooltip: 'Import', href: '/import' },
      { icon: 'file_upload_icon', tooltip: 'Export', href: '/export' },
      { icon: 'settings_icon', tooltip: 'Settings', href: '/settings' },
      { icon: 'info_outline_icon', tooltip: 'Info', href: '/info' },
    ];

    return (
      <div className={classes.drawerList}>
        <div className={classes.toolbar} />
        {
          options.map((option, i) => (
            <Link key={i} to={option.href}>
              <Tooltip id="tooltip-fab" title={option.tooltip}>
                <Button onClick={handleDrawerToggle} variant="fab" color="secondary" aria-label="import" className={classes.button}>
                  <Icon>{option.icon}</Icon>
                </Button>
              </Tooltip>
            </Link>
          ))
        }
        <ProfileList />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(DrawerList);
