import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RandomQuote extends Component {
  static propTypes = {
    content: PropTypes.string,
    author: PropTypes.string
  };

  static defaultProps = {
    content: "",
    author: ""
  };

  render() {
    return <></>;
  }
}
