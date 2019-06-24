import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./PostRow.css";
import moment from "moment";

export default class PostRow extends PureComponent {
  render() {
    const formatDate = moment(this.props.date).format("MMM Do YYYY");

    return (
      <tr className="PostRow">
        <td className="PostRow__value">
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            {this.props.title.rendered}
          </a>
        </td>
        <td className="PostRow__value">{formatDate}</td>
      </tr>
    );
  }
}

PostRow.propTypes = {
  title: PropTypes.shape({ rendered: PropTypes.string }),
  date: PropTypes.string,
  link: PropTypes.string
};

PostRow.defaultProps = {
  title: { rendered: "" },
  date: "",
  link: ""
};
