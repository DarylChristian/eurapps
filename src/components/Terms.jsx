import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { withRouter, Link, NavLink } from "react-router-dom";

import zoom from "./imgs/zoom.png";
import kahoot from "./imgs/kahoot.png";
import canva from "./imgs/canva.png";
import menti from "./imgs/menti.png";
import powtoon from "./imgs/powtoon.png";
import codility from "./imgs/codility.png";

const tiers = [
  {
    id: 0,
    title: "Zoom",
    image: zoom,
    description: ["Video conferencing app"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
  {
    id: 1,
    title: "Kahoot",
    image: kahoot,
    description: ["Online platform for games"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
  {
    id: 2,
    title: "Canva",
    image: canva,
    description: ["designing platform"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
  {
    id: 3,
    title: "Menti",
    image: menti,
    description: ["online survey platform"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
  {
    id: 4,
    title: "Powtoon",
    image: powtoon,
    description: ["video creation tool"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
  {
    id: 5,
    title: "Codility",
    image: codility,
    description: ["skills assessment platform"],
    buttonText: "Sign up",
    buttonVariant: "outlined",
  },
];

const terms = [
  "No client information should be shared in this app.",
  "Do not share the app password to anyone.",
  "Booking of this app is first come first serve only.",
  "Sign-up only if you already know the meeting details (date, attendees, etc).",
  "No client information should be shared in this app.",
  "Do not share the app password to anyone.",
  "Booking of this app is first come first serve only.",
  "Sign-up only if you already know the meeting details (date, attendees, etc).",
  "Password changes every month."
];

export default function Terms(props) {
  console.log('props: ' + JSON.stringify(props.match.params));
  const classes = useStyles();
  const appId = props.match.params.id;
  return (
    <div>
      <div className={classes.textHeader}>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Terms and Conditions
        </Typography>
      </div>
      <Grid container alignItems="center">
        <div className={classes.appContainer}>
          <div className={classes.logoContainer}>
            <img
              className={classes.appLogo}
              src={tiers[appId].image}
              alt="logo"
            />
          </div>
          <div className={classes.typoBody}>
            <Card className={classes.rootCard}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  align="center"
                  gutterBottom
                >
                  {tiers[appId].title} usage
                </Typography>
                {terms.map((term) => {
                  return (
                    <Typography
                      align="left"
                      color="textSecondary"
                      component="p"
                    >
                      {term}
                    </Typography>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </Grid>
      <div className={classes.buttonCon}>
        <Button variant="contained" color="secondary" component={Link} to={'/'}>
          CANCEL
        </Button>
        <Button variant="contained" color="primary" component={Link} to={`/app/${tiers[appId].id}`}>
          I AGREE
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonCon: {
    marginTop: 50,
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
    alignSelf: "space-evenly",
  },
  logoContainer: {
    display: "flex",
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  appContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  typoBody: {
    display: "flex",
    flex: 7,
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
  },
  rootCard: {
    marginTop: 0,
    paddingLeft: 50,
  },
  appLogo: {
    width: 200,
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  textHeader: {
    marginBottom: 40,
  },
}));
