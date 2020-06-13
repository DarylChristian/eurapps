import React from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import { Button, TextField, Typography, Grid, CircularProgress } from "@material-ui/core";
import { Redirect, withRouter } from 'react-router-dom';

class AppForm extends React.Component {
  state = {
    errors: true,
    eidField: "",
    alreadyPressed: false,
  };

  handleTextFieldChange = (e) => {
    const { eidField } = this.state;
    this.setState({
      eidField: e.target.value,
    });
    if (eidField.length > 3) {
      this.setState({ errors: false });
    } else {
      this.setState({ errors: true });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({alreadyPressed: true});

    var form = new FormData();
form.append("appId", this.props.match.params.id);
form.append("eid", this.state.eidField);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };

    axios
      .post(
        `https://eur.ninjainnovations.com/public/api/request/add`,
        form,
        axiosConfig
      )
      .then((res) => {
        console.log(res.data.notice.text);
        if(res.data.notice.text === "request added"){
          this.props.history.push("/submitted");
        }
      });

     /*  const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: { eid: 'React POST Request Example', appId: 1 }
    };
    fetch('https://eur.ninjainnovations.com/public/api/request/add', requestOptions)
        .then(response => {
          console.log(JSON.stringify(response))
        }); */


  };
  render() {
    const { errors, eidField, alreadyPressed } = this.state;
    /* console.log(eidField)
console.log(errors) */
if(alreadyPressed) {
  return (
  <div style={{display: "flex", justifyContent:'center'}}><CircularProgress /></div>
  )
}
    return (
      <div>
        <div style={classes.textHeader}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Your details
          </Typography>
        </div>
        <Grid>
          <div style={classes.content}>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <FormControl fullWidth style={classes.margin}>
                <TextField
                  value={eidField}
                  fullWidth
                  id="eid"
                  label="Enter your EID"
                  onChange={this.handleTextFieldChange}
                />
                <div style={classes.buttonCon}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={errors || alreadyPressed }
                  >
                    Submit
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
    minWidth: 350,
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

export default withRouter(AppForm);