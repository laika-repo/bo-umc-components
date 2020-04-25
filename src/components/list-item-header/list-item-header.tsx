import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-list-item-header',
  styleUrl: 'list-item-header.scss',
  shadow: true
})
export class ListItemHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
