import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-header',
  styleUrl: 'teaser-header.scss',
  shadow: false
})
export class TeaserHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
