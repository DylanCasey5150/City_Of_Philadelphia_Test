import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Post.css";
import PostHeader from "../PostHeader/PostHeader.js";
import PostRow from "../PostRow/PostRow.js";
import PostFilter from "../PostFilter/PostFilter.js";

class Posts extends PureComponent {
  render() {
    const { updateFilter } = this.props;
    const posts = this.props.posts.map(post => (
      <PostRow
        key={post.link}
        title={post.title}
        date={post.date}
        link={post.link}
      />
    ));

    return (
      <div className="Posts">
        <PostFilter onInput={updateFilter} />
        <table>
          <PostHeader />
          <tbody>{posts}</tbody>
        </table>
      </div>
    );
  }
}

export default Posts;

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({
        rendered: PropTypes.string
      }),
      date: PropTypes.string,
      link: PropTypes.string
    })
  ),
  updateFilter: PropTypes.func.isRequired
};

Posts.defaultProps = {
  posts: []
};
