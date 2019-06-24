import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./PostFilter.css";

export default class PostFilter extends PureComponent {
  handleInput = event => {
    this.props.onInput(event.target.value);
  };

  render() {
    return (
      <input
        className="PostFilter"
        onInput={this.handleInput}
        placeholder="Search by title"
      />
    );
  }
}

PostFilter.propTypes = {
  onInput: PropTypes.func
};

PostFilter.defaultProps = {
  oninput: () => {}
};
