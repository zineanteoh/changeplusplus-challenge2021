import React, { Component } from "react";
import "./PopupMessage.css";

class PopupMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: false,
      ranking: 0,
    };
  }

  animatePopup(ranking) {
    let that = this;
    this.setState({ ranking: ranking });
    this.setState({ popup: true });
    window.setTimeout(function () {
      that.setState({ popup: false });
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
