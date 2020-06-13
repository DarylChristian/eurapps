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

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    appLogo: {
      width: 200,
      borderWidth: 1,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textHeader: {
    marginBottom: 40,
  }
}));
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

export default function AppList() {
  const classes = useStyles();
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
          // Enterprise card is full width at sm breakpoint
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
