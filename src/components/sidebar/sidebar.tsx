import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true
})
export class Sidebar {

  render() {
    return (
      <Host>
        <slot name='content'></slot>
      </Host>
    );
  }

}
