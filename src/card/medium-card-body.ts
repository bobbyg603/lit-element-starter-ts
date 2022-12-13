 import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
 
 /**
  * Medium card body sub-component
  * @property body - card body text
  */
 @customElement('medium-card-body')
 export class MediumCardBodyElement extends LitElement {
    static override styles = css`
        :host {
            flex-grow: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--medium-body-color);
        }
    `;

     @property()
     body = '';
 
     override render() {
         return html`${this.body}`;
     }
 }
 
 declare global {
     interface HTMLElementTagNameMap {
         'medium-card-body': MediumCardBodyElement;
     }
 }
 