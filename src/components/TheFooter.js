import { Component } from "../core/important";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = /* html */ `
      <div>
        <!--github 주소를 써주자!!!!!!-->
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          Kim dong Woo
        </a>
      </div>
    `;
  }
}
