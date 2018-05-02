import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
});

class Settings extends React.Component {

  render() {
    return (
      <p>Awesome settings</p>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Settings);
