/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MediumFeed} from '../medium-feed';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('medium-feed', () => {
  test('is defined', () => {
    const el = document.createElement('medium-feed');
    assert.instanceOf(el, MediumFeed);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<medium-feed></medium-feed>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<medium-feed name="Test"></medium-feed>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<medium-feed></medium-feed>`)) as MediumFeed;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<medium-feed></medium-feed>`)) as MediumFeed;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
