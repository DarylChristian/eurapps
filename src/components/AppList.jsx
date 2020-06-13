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

import { withRouter, Link, NavLink } from "react-router-dom";

import zoom from "./imgs/zoom.png";
import kahoot from "./imgs/kahoot.png";
import canva from "./imgs/canva.png";
import menti from "./imgs/menti.png";
import powtoon from "./imgs/powtoon.png";
import codility from "./imgs/codility.png";

const classes  = {
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  textHeader: {
    marginBottom: 40,
  },
};

export default class AppList extends React.Component {
  state = {
    tiers: [
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
    ]
  }
  render() {
    const { tiers } = this.state;
    return (
      <div>
        <div className={classes.textHeader}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Choose from the selection below for your request
          </Typography>
        </div>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card style={{ height: 500 }}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <img
                    className={classes.appLogo}
                    src={tier.image}
                    alt="logo"
                  />
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color="primary"
                  component={Link}
                  to={`/terms/${tier.id}`}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

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
