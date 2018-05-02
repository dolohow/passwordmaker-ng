import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
});

class Info extends React.Component {

  render() {
    return (
      <p>Awesome</p>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Info);
