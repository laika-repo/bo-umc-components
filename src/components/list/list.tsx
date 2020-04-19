import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {
  render() {
    return (
      <Host>
        <slot></slot>
        </Host>
    );
  }

}
