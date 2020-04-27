import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-content-header',
  styleUrl: 'content-header.scss',
  shadow: false
})
export class ContentHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
