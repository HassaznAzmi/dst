import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Star, ArrowUpward } from "@material-ui/icons";
import "./TimelineElement.css";
import img from "../../images/stock.jpg";
import * as postService from "../../services/posts/postService";

class TimelineElement extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <VerticalTimelineElement
        className="tl-ele-container"
        date=""
        iconStyle={{ background: "#002868", color: "#fff" }}
        icon={<Star />}
      >
        <div className="tl-content-container">
          {/* <img className="tl-content-img" src={img} alt=""/> */}

          <ArrowUpward
            className="upvote"
            title="Upvote"
            onClick={() => {
              this.props.eleData.rating += 1;
              postService.incrementRating(
                this.props.eleData.doc,
                this.props.eleData.rating
              );
            }}
          />

          <div className="tl-content-info">
            <h5 className="vertical-timeline-element-title">
              On {this.props.eleData.date}
            </h5>
            <h1 className="vertical-timeline-element-subtitle">
              {this.props.eleData.title}
            </h1>
            <p className="vertical-timeline-element-description">
              {this.props.eleData.description}
            </p>
          </div>

          <div className="tl-content-footer">
            <div>
              <span>Source:</span>
              <a className="src" href={this.props.eleData.source}>
                {this.props.eleData.source}
              </a>
            </div>

            <span>Rating: {this.props.eleData.rating}</span>
          </div>
        </div>
      </VerticalTimelineElement>
    );
  }
}

export default TimelineElement;
