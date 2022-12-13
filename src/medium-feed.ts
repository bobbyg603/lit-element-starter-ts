import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Displays a collection of Medium article cards.
 *
 * @property url - The Medium RSS feed url
 * @property count - The number of preview cards to display
 */
@customElement('medium-feed')
export class MediumFeed extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
    }

    .body {
      flex-grow: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--medium-body-color);
    }

    .card {
      cursor: pointer;
      display: flex;
      background-color: var(--medium-card-background-color, white);
      border: var(--medium-card-border, solid 1px lightgray);
      border-radius: var(--medium-card-border-radius, 3px);
    }

    .footer {
      color: var(--medium-footer-color, lightgray);
    }

    .header {
      flex-grow: 1;
      color: var(--medium-header-color);
    }

    .header h2, .header h3 {
      margin: 0;
    }

    .right {
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .thumbnail {
      display: flex;
    }

    .thumbnail img {
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
  url = '';

  @property({ type: Number })
  count = 10;

  @state()
  private _state: { posts: MediumPost[] } = { posts: [] };

  override connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  override render() {
    return html`${this._state.posts
      .slice(0, this.count)
      .map(post => {
        const header = post.title;
        const subheader = post.author;
        const thumbnail = post.thumbnail;
        const body = `${this.trimContent(post.content)}...`;
        const footer = post.categories.join(' ');

        return html`
          <div class="card" @click=${() => this.cardClick(post.link)}>
            <div class="left">
              <div class="thumbnail">
                <img src="${thumbnail}">
              </div>
            </div>
            <div class="right">
              <div class="header">
                <h2>${header}</h2>
                <h3>${subheader}</h3>
              </div>
              <div class="body">
                ${body}
              </div>
              <div class="footer">
                ${footer}
              </div>
            </div>
          </div>
          <br>
        `;
      })
      }`;
  }

  private cardClick(url: string) {
    window.open(url, "_blank");
  }

  private async fetchData() {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${this.url}`;
    const response = await fetch(url);
    const json = (await response.json()) as MediumResponse;
    const posts = json.items;

    this._state = { posts };
  }

  private trimContent(content: string) {
    return content
      .split("<p>")
      .splice(3)
      .join('')
      .replace(/<\/?[^>]+(>|$)/g, "")
      .split(' ')
      .slice(0, 32)
      .join(' ');
  }
}

interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  categories: string[];
  pubDate: Date;
  creator: string;
  author: string;
  content: string;
}


interface MediumResponse {
  items: MediumPost[];
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-feed': MediumFeed;
  }
}
