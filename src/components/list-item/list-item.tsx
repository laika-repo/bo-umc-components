import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-list-item',
  styleUrl: 'list-item.scss',
  shadow: false
})
export class ListItem {
  render() {
    return (
        <slot></slot>
    );
  }

}
