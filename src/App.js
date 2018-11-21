import React, { Component, createRef } from "react";

const options = [
  { candidate: "Barack Obama", selected: false },
  { candidate: "George Bush", selected: false },
  { candidate: "Hillary Clinton", selected: false },
  { candidate: "Bernie Sanders", selected: false },
  { candidate: "Marco Rubio", selected: false },
  { candidate: "George Washington", selected: false },
  { candidate: "John Adams", selected: false },
  { candidate: "Abraham Lincoln", selected: false },
  { candidate: "Franklin D. Roosevelt", selected: false },
  { candidate: "Ron Swanson", selected: false }
];

const containerStyles = {
  width: "250px",
  margin: "0 auto"
};
const buttonStyles = {
  width: "100%",
  padding: "8px 0",
  textAlign: "center",
  backgroundColor: "#d8d8d8",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "3px"
};
const optionStyles = {
  ...buttonStyles,
  margin: "10px 0",
  padding: 0,
  textAlign: "left"
};
const rankStyles = {
  display: "inline-block",
  marginRight: "8px",
  padding: "8px",
  backgroundColor: "#2c5c6c",
  color: "white",
  borderRadius: "3px 0 0 3px"
};
const dropdownStyles = {
  focus: "none"
};
const submitStyles = {
  ...buttonStyles,
  marginTop: "20px",
  backgroundColor: "#00b06f",
  color: "white"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ranks: [options[0]], options, submitted: false };
    this.container = createRef();
  }

  handleChange = event => {
    const {
      target,
      target: { value, previousValue, id }
    } = event;
    const {
      container: { current: container },
      state: { options, ranks }
    } = this;
    const menus = container.querySelectorAll("select");
    const hasPreviousValue = previousValue && previousValue !== "skip";
    if (hasPreviousValue) {
      const previousOptionIndex = options.findIndex(
        o => o.candidate === previousValue
      );
      options[previousOptionIndex].selected = false;
    }
    if (value !== "skip") {
      const optionIndex = options.findIndex(o => o.candidate === value);
      options[optionIndex].selected = true;
      if (!hasPreviousValue) {
        ranks.push({});
      }
    } else if (hasPreviousValue) {
      const menuId = id.slice(-1);
      menus.forEach(menu => {
        const id = menu.id.slice(-1);
        if (id > menuId) {
          ranks.pop();
        }
      });
    }
    target.previousValue = value;
    this.setState({ options, ranks });
  };

  handleSubmit = () => {
    this.setState({ submitted: !this.state.submitted });
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Rank your favorite candidates</h1>
        <form ref={this.container} style={containerStyles}>
          {this.state.ranks.map((_, i) => (
            <div key={i} style={optionStyles}>
              <label style={rankStyles} htmlFor={`menu-${i}`}>
                {i + 1}
              </label>
              <select
                id={`menu-${i}`}
                style={dropdownStyles}
                onChange={this.handleChange}
              >
                <option defaultValue value="skip">
                  Select an option (or skip)
                </option>
                {this.state.options.map((o, j) => (
                  <option
                    key={`${o.candidate}-${j}`}
                    value={o.candidate}
                    disabled={o.selected}
                  >
                    {o.candidate}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div onClick={this.handleSubmit} style={submitStyles}>
            {this.state.submitted ? "Nice!" : "Submit"}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
