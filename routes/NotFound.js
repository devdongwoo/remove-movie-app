import { Component } from "../src/core/important";

export default class NowFound extends Component {
  render() {
    this.el.classList.add("container", "not-found");
    this.el.innerHTML = /* html */ `
      <h1>
        Sorry..<br>
        Page Not Found.
      </h1>
    `;
  }
}
