import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Timeline from "../Timeline";
import Heading from "../Heading";
import "./Drawer.css";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem
            button
            onClick={() => this._timeline.retrievePostsByCategory("sexist")}
          >
            <ListItemText primary="Sexist" />
          </ListItem>
          <ListItem button onClick={() => this._timeline.retrievePostsByCategory("racist")}>
            <ListItemText primary="Racist" />
          </ListItem>
          <ListItem button onClick={() => this._timeline.retrievePostsByCategory("dumb")}>
            <ListItemText primary="Dumb" />
          </ListItem>
          <ListItem button onClick={() => this._timeline.retrievePostsByCategory("aa")}>
            <ListItemText primary="Anti-American" />
          </ListItem>
          <ListItem button onClick={() => this._timeline.retrievePostsByCategory("ae")}>
            <ListItemText primary="Anti-Environment" />
          </ListItem>
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <Divider />
      </div>
    );

    return (
      <div>
        <div id="drawer-container">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.toggleDrawer("left", true)}
            id="menu-btn"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer("left", false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("left", false)}
              onKeyDown={this.toggleDrawer("left", false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>

        <div id="content">
          <Heading />
          <Timeline
            ref={timeline => {
              this._timeline = timeline;
            }}
          />
        </div>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
