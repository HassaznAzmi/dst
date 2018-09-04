import React from 'react';
import './Footer.css';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Close } from "@material-ui/icons";


class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      showFooter: true,
      url: ''
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {


    return (
      <div id="footer">
        <h4 id="question">Did I Miss Anything? Provide a link to a credible new source and I will add it.</h4>
        <input
          placeholder="www.example.com"
          id="input"
          value={this.state.url}
          onChange={this.handleChange('url')}
        />
        <Button variant="contained" color="primary" id="button">
          Submit
        </Button>
        <Close id="close" onClick={(event)=>this.props.onClose(event)}></Close>
      </div>
    );
  }
}

export default Footer;
