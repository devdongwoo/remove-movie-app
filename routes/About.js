import { Component } from "../src/core/important";
import aboutStore from "../src/store/about";

export default class About extends Component {
  render() {
    const { photo, name, email, github, blog } = aboutStore.state;
    this.el.classList.add("container", "about");
    this.el.innerHTML = /* html */ `
      <div 
          style="background-image: url(${photo})"
          class="photo"
          >
      </div>
      <p class="name">${name}</p>
      <p><a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" 
            target="_blank">
          </a>
      </p>
      <p><a href="${github}" target="_blank"></a></p>
      <p><a href="${blog}" target="_blank"></a></p>
    `;
  }
}
