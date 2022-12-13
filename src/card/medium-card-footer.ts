import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Medium card footer sub-component
 * @property text - card footer text
 */
@customElement('medium-card-footer')
export class MediumCardFooterElement extends LitElement {

    static override styles = css`
        :host {
            color: var(--medium-footer-color, lightgray);
        }
    `;

    @property()
    footer = '';

    override render() {
        return html`${this.footer}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'medium-card-footer': MediumCardFooterElement;
    }
}
