import React, { Component } from "react";
import organizePosts from "../utils/organizePosts.js";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.phila.gov/wp-json/wp/v2/posts/";

export default function PostData(WrappedComponent) {
  return class extends Component {
    state = {
      filter: "",
      posts: [],
      organizedPosts: []
    };

    componentDidMount() {
      fetch(proxyurl + url)
        .then(d => d.json())
        .then(posts => {
          const { filter } = this.state;
          this.setState({
            posts,
            organizedPosts: organizePosts(filter, posts)
          });
        });
    }

    updateFilter = filter => {
      const { posts } = this.state;
      this.setState({
        organizedPosts: organizePosts(filter, posts)
      });
    };

    render() {
      const { organizedPosts } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          posts={organizedPosts}
          updateFilter={this.updateFilter}
        />
      );
    }
  };
}
