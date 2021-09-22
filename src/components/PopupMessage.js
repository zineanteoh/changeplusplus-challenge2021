import React, { Component } from "react";
import "./PopupMessage.css";

class PopupMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: false,
      ranking: 0,
      isFading: true,
    };
  }

  animatePopup(ranking) {
    let that = this;
    this.setState({ ranking: ranking });
    this.setState({ popup: true });
    this.setState({ isFading: true });
    window.setTimeout(function () {
      if (that.state.isFading) {
        that.setState({ popup: false });
      }
      that.setState({ fading: false });
    }, 1000);
  }

  render() {
    const classes = this.state.popup ? "popup" : "popup hide";
    return (
      <div className="popup">
        <div className={classes}>
          <p>{this.props.message}</p>
          <p>That album was ranked #{this.state.ranking}</p>
        </div>
      </div>
    );
  }
}

export default PopupMessage;
