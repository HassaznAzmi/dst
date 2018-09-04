import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import TimelineElement from "../TimelineElement";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import TopPost from "../TopPost";
import * as postService from '../../services/posts/postService'

class Timeline extends React.Component {
  constructor(){
    super();
    this.state = {
      timelineData: [{date: '', title: '',source: '', rating: 0, description: ''}]
    }
  }

  retrievePosts(order, dir) {
    let posts = [];
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



    postService.getPosts(order, dir).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let eleData = doc.data();
        eleData.doc = doc;
        eleData.date = doc.data().date.toDate().toLocaleDateString('en-us', options);
        posts.push(eleData)
      });
      
      this.setState({
        timelineData: posts
      })
    });
  }

  retrievePostsByCategory(cat) {
    let posts = [];
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    postService.getPosts('date', 'desc').then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          let eleData = doc.data();
          if ( eleData.category.includes(cat)) {
            eleData.date = doc.data().date.toDate().toLocaleDateString('en-us', options);
            posts.push(eleData)
          }
      });
      this.setState({
        timelineData: posts
      })
    });
  }

  componentDidMount() {
    this.retrievePosts('date', 'desc');
  };

  render() {



    return (
      <div>
        <TopPost eleData={this.state.timelineData[0]} />

        <VerticalTimeline>
          {this.state.timelineData.map(eleData => (
            <TimelineElement eleData={eleData} key={eleData.title} />
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;
