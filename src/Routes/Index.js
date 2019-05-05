import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import api from "../Services/api";
import ListingCard from "../Components/ListingCard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    opacity: 0.2
  }
});

class Index extends React.Component {
  state = {
    details: []
  };

  async componentDidMount() {
    const details = await api.listings.getListingsDetails();
    console.log(details);
    this.setState({ details });
  }
  render() {
    const { classes } = this.props;
    const { details } = this.state;
    return (
      <div className={classes.list}>
        {details.map(detail => (
          <ListingCard className={classes.card} details={detail} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Index);
