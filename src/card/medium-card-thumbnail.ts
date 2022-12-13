import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Medium card header sub-component
 * @property src - url to use for the thumbnail image
 */
@customElement('medium-card-thumbnail')
export class MediumCardThumbnailElement extends LitElement {
    static override styles = css`
     :host {
        display: flex;
     }

     img {
        height: var(--medium-thumbnail-height, 220px);
        width: var(--medium-thumbnail-width, 330px);
        border-top-left-radius: var(--medium-thumbnail-border-left-radius);
        border-bottom-left-radius: var(--medium-thumbnail-border-left-radius);
        border-top-right-radius: var(--medium-thumbnail-border-right-radius);
        border-bottom-right-radius: var(--medium-thumbnail-border-right-radius);
        object-fit: cover;
     }
     `;

    @property()
    src = '';

    override render() {
        return html`<img src="${this.src}">`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'medium-card-thumbnail': MediumCardThumbnailElement;
    }
}
