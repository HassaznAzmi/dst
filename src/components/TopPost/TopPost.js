import React from 'react';
import './TopPost.css';
import img from '../../images/trump.jpg';

class TopPost extends React.Component {
  componentDidMount() {}


  render() {
    return (
      <section id="top-post-container">
        <img id="img" src={img} alt=""/>

        <div id="top-post-content">
          <h5 className="top-post-title">
            On {this.props.eleData.date}
          </h5>
          <h1 className="top-post-subtitle">
            {this.props.eleData.title}
          </h1>
          <p className="top-post-description">
            {this.props.eleData.description}
          </p>
        </div>

        <div className="top-post-footer">
          <div>
            <span>Source:</span>
            <a className="src" href={this.props.eleData.source}>
              {this.props.eleData.source}
            </a>
          </div>

          <span>Rating: {this.props.eleData.rating}</span>
          </div>
      </section>
    );
  }
}

export default TopPost;
