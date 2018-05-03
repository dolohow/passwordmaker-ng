import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PaperCard from './PaperCard';

const styles = theme => ({
  subheading: {
    marginBottom: "25px"
  },
  paragraph: {
    marginBottom: "20px"
  }
});

class Info extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <PaperCard header="Information">
        <Typography variant="subheading" className={classes.subheading} noWrap>
          Keyboard navigation
        </Typography>
        <Typography component="p" className={classes.paragraph}>
          You can use the shortcut <strong>Alt+Z</strong> to open the PasswordMaker Pro popup, no matter where you are on a website.
        </Typography>
        <Typography component="p" className={classes.paragraph}>
          When you are done typing your master password in the Password textfield of the PassworkMaker Pro popup,
          you can push <strong>Enter</strong> to fill the open website'spassword field with the generated password, using the settings
          that were preselected in the PasswordMaker Pro popup. Alternatively, you can copy the generated password
          to the clipboard by pressing <strong>Ctrl+C</strong>.
        </Typography>
        <Typography component="p" className={classes.paragraph}>
          If you do not have the <strong>Keep Master Password Hash</strong> setting enabled, pushing <strong>Enter</strong> or <strong>Tab</strong>
        in the Password textfield will bring you to the Confirmation textfield. Here you can then push <strong>Enter</strong>, after you are done
        typing your master password again, to fill the open website's password field, using the settings that were preselected in the password popup.
      </Typography>
    </PaperCard>
  )
}
}

export default withStyles(styles, { withTheme: true })(Info);
