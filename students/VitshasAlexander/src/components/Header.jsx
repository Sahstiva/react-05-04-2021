import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Header extends React.Component {
  render() {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Geekbrains messaenger
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}