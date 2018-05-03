import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: "24px",
    marginTop: theme.spacing.unit * 1,
  }),
  paperPadding: {
    [theme.breakpoints.up('md')]: {
      padding: "40px 10%"
    }
  },
  headline: {
    borderBottom: "1px solid gray",
    paddingBottom: "5px",
    marginBottom: "40px"
  },
});

class PaperCard extends React.Component {
  render() {
    const { classes, header } = this.props;
    let test = `${classes.root} ${classes.paperPadding}`;
    return (
      <Paper className={ test } elevation={4}>
        <Typography variant="headline" component="h3" className={classes.headline}>
          { header }
        </Typography>
        { this.props.children }
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperCard);
