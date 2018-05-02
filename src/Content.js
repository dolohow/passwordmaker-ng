import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Content extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {this.props.children}
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Content);
