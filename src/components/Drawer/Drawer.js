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
import ListSubheader from "@material-ui/core/ListSubheader";
import Timeline from "../Timeline";
import Heading from "../Heading";
import Footer from "../Footer";
import "./Drawer.css";

const styles = {
  list: {
    width: 300
  }
};



class TemporaryDrawer extends React.Component {
  state = {
    left: false,
    showFooter: true
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
      curr: ""
    });
  };

  onClose() {
    this.setState({ showFooter: false });
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Categories</ListSubheader>}
        >
          <ListItem
            button
            onClick={() => {
              this.state.curr = "sexist";
              this._timeline.retrievePostsByCategory("sexist");
            }}
          >
            <ListItemText primary="Sexist" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.state.curr = "racist";
              this._timeline.retrievePostsByCategory("racist");
            }}
          >
            <ListItemText primary="Racist" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.state.curr = "dumb";
              this._timeline.retrievePostsByCategory("dumb");
            }}
          >
            <ListItemText primary="Dumb" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.state.curr = "aa";
              this._timeline.retrievePostsByCategory("aa");
            }}
          >
            <ListItemText primary="Anti-American" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.state.curr = "ae";
              this._timeline.retrievePostsByCategory("ae");
            }}
          >
            <ListItemText primary="Anti-Environment" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              this.state.curr = "";
              this._timeline.retrievePosts("rating", "desc");
            }}
          >
            <ListItemText primary="Dumb Shit Hall of Fame" />
          </ListItem>
        </List>
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

          {this.state.showFooter ? (
            <Footer onClose={() => this.onClose()} />
          ) : null}
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
