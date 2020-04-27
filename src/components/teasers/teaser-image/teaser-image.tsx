import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-image',
  styleUrl: 'teaser-image.css',
  shadow: true
})
export class TeaserImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
