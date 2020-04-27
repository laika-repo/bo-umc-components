import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-text',
  styleUrl: 'teaser-text.css',
  shadow: true
})
export class TeaserText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
