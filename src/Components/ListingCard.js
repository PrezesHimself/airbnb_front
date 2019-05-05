import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    marginBottom: 20
  },
  media: {
    flex: "1 0 150px"
  },
  area: {
    display: "flex",
    alignItems: "stretch"
  },
  content: {
    flex: "0 0 50%"
  }
};

function ListingCard(props) {
  const { classes } = props;
  const { name, id, photo } = props.details;
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={photo}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Open
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListingCard);
