import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  listItem: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  Avatar: {
    width: "35px",
    height: "35px"
  },
  ListItemText: {
    primary: {
      fontSize: "18px"
    }
  }
});

const profiles = [
  {
    name: 'Amy Farha',
    date: 'Wed May 02 2018 16:55:26 GMT+0200 (CEST)'
  },
  {
    name: 'Chris Jackson',
    date: 'Wed May 02 2018 16:55:26 GMT+0200 (CEST)'
  },
]


class ProfileList extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <List>
      {
        profiles.map((l, i) => (
          <ListItem key={i} dense button className={classes.listItem}>
            <Avatar src="../cat.svg" />
            <ListItemText
              primary={
                <Typography style={{fontSize: "18px"}}>
                  {l.name}
                </Typography>
              }
              secondary={new Date(l.date).toDateString()} />
            <ListItemSecondaryAction>
              <IconButton style={{color: 'rgba(0, 0, 0, 0.26)'}} className={classes.button} aria-label="Add an alarm">
                <Icon>mode_edit_icon</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
      </List>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ProfileList);
