import React from 'react';
import { withStyles } from 'material-ui/styles';
import PaperCard from './PaperCard';

const styles = theme => ({
  subheading: {
    marginBottom: "25px"
  },
  paragraph: {
    marginBottom: "20px"
  }
});

class ProfileView extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <PaperCard header={this.props.match.params.profileName}>
      </PaperCard>
  )
}
}

export default withStyles(styles, { withTheme: true })(ProfileView);
