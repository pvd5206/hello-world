import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }

      :host([this.counter = 10]) {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #b2a); //this is the changed display for when the counter hits 10
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <h2>: ${this.counter}</h2> //I am confused
      <button @click="${() => this.counter = !this.counter}">Toggle active</button> //I am stuck
    `;
  }
}
