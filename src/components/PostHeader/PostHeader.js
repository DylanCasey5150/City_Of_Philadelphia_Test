import React, { PureComponent } from "react";

import "../PostHeader/PostHeader.css";

export default class PostHeader extends PureComponent {
  render() {
    return (
      <thead className="PostHeader">
        <tr className="PostHeader__labels">
          <th className="PostHeader__label__title">TITLE</th>
          <th className="PostHeader__label__date">PUBLISH DATE</th>
        </tr>
      </thead>
    );
  }
}
