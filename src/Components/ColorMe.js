import React from "react";

import "./colorMe.css";

class ColorMe extends React.Component {
  state = {
    inputValue: "",
    colorBoxNumber: null,
  };

  inputHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  submitHandler = () => {
    this.setState({ colorBoxNumber: +this.state.inputValue });
  };

  render() {
    const style = {
      background: "red",
    };
    return (
      <div class="main-div">
        <div class="left-div">
          <input
            value={this.state.inputValue}
            onChange={this.inputHandler}
            class="input-text"
          />
          <br />
          <button onClick={this.submitHandler} class="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
        <div class="right-div">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele) => (
            <div
              key={ele}
              class="elements"
              style={ele === this.state.colorBoxNumber ? style : null}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorMe;
