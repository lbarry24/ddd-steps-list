/**
 * Copyright 2025 lbarry24
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list-item`
 * 
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-steps-list-item";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      step: { type: Number, reflect: true } // Step number from parent
    };
  }

  constructor() {
    super();
    this.title = "";
    this.step = 0;
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          margin-bottom: var(--ddd-spacing-6, 24px);
          position: relative;
        }

       
        .step-wrapper {
          display: flex;
          align-items: flex-start;
          position: relative;
          margin-left: -32px; /* move circles left */
        }

        .step-circle {
          width: var(--ddd-spacing-10, 48px);
          height: var(--ddd-spacing-10, 48px);
          border-radius: var(--ddd-radius-full, 9999px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-bold, bold);
          font-size: var(--ddd-font-size-lg, 1.25rem);
          margin-right: var(--ddd-spacing-4, 16px);
          background-color: var(--ddd-theme-primary, #001e44);
          color: #fff; /* Force white text inside circle */
          flex-shrink: 0;
          z-index: 1;
        }

        .step-wrapper::after {
          content: '';
          position: absolute;
          top: 48px; /* Start right below the circle */
          left: 24px; /* Line center under circle */
          width: 0;
          height: calc(100% - 48px);
          border-left: 2px dashed var(--ddd-theme-primary, #001e44);
          z-index: 0;
        }

        .step-content {
          flex: 1;
        }

        h3 {
          margin: 0 0 0.5em 0;
          font-size: 28px;
          font-weight: bold;
          color: var(--ddd-theme-primary, #001e44); /* Title blue */
        }

        .step-content p,
        .step-content ul,
        .step-content li {
          font-size: 16px;
          color: #000000; /* Paragraphs and lists black */
        }

        .step-content img {
          max-width: 100%;
          height: auto;
          display: block;
          margin-top: 1em;
        }

        ul {
          padding-left: 1.2em;
        }

        ul li {
          margin-bottom: 0.5em;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="step-wrapper">
        <div class="step-circle">${this.step}</div>
        <div class="step-content">
          <h3>${this.title}</h3>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);



