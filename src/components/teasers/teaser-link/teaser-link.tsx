import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-link',
  styleUrl: 'teaser-link.scss',
  shadow: false
})
export class TeaserLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
