/**
 * Copyright 2025 lbarry24
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list`
 * 
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-4, 16px);
          box-sizing: border-box;
          color: var(--ddd-theme-primary, #001e44);
        }
      `
    ];
  }

  render() {
    return html`
      <slot @slotchange="${this._onSlotChange}"></slot>
    `;
  }

  firstUpdated() {
    this._assignSteps();
  }

  _onSlotChange() {
    this._assignSteps();
  }

  _assignSteps() {
    const items = Array.from(this.querySelectorAll('ddd-steps-list-item'));
    items.forEach((item, index) => {
      item.step = index + 1;
    });
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);




