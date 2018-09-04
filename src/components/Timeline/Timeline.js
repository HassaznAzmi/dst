import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import TimelineElement from "../TimelineElement";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import firebase from "../../services/firebase/firebase.js";
import * as postService from '../../services/posts/postService'

class Timeline extends React.Component {
  constructor(){
    super();
    this.state = {
      timelineData: []
    }
  }

  retrievePosts() {
    let posts = [];
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



    postService.getPosts().then((querySnapshot) => {
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
    console.log('in cat');

    postService.getPosts().then((querySnapshot) => {
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
    this.retrievePosts();
  };

  render() {



    return (
      <div>
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
