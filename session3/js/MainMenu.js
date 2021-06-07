const $template = document.createElement("template");
$template.innerHTML = `
<div class="main-menu">
      <div class="menu-item">
        <a href="#">home</a>
      </div>
      <div class="menu-item">
        <a href="#">about</a>
      </div>
      <div class="menu-item">
        <a href="#">contact</a>
      </div>
    </div>
hahaha
`;
export default class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$menuItems = this.getElementsByClassName("menu-item");
  }
  static get observeAttributes() {
    return ["active"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    // console.log('thuoc tinh' + attrName+ 'co gia tri la' + newValue);
    if (attrName == "active") {
      for (let $menuItem of this.$menuItems) {
        $menuItem.classList.remove("highlight");
      }
      this.$menuItem[newValue].classList.add("highlight");
      // this.$menuItem[newValue].getElementsByClassName.backgroundColor= 'blue'
    }
  }
}
window.customElements.define("main-menu", MainMenu);
