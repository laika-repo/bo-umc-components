import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: false
})
export class Sidebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
