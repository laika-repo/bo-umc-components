import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser',
  styleUrl: 'teaser.scss',
  shadow: false
})
export class Teaser {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
