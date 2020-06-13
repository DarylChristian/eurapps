import React from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

class Submitted extends React.Component {
  state = {
    errors: true,
    eidField: "",
  };

  
  render() {
    const { errors, eidField } = this.state;
    /* console.log(eidField)
console.log(errors) */
    return (
      <div>
        <div style={classes.textHeader}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Thanks for your submission. We'll review your request and send an email once approved. 
          </Typography>
        </div>
        <Grid>
          <div style={classes.content}>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <FormControl fullWidth style={classes.margin}>
                <div style={classes.buttonCon}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={"/"}
                  >
                    Go to HOME
                  </Button>
                </div>
              </FormControl>
            </form>
          </div>
        </Grid>
      </div>
    );
  }
}
const classes = {
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  margin: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 500,
  },
  buttonCon: {
    marginTop: 50,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
};

export default Submitted;