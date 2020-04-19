import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-list-header',
  styleUrl: 'list-header.scss',
  shadow: false
})
export class ListHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
