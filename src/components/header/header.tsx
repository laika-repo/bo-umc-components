import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class Header {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
