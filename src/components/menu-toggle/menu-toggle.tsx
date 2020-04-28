import { Component, h } from '@stencil/core';

@Component({
  tag: 'umc-menu-toggle',
  styleUrl: 'menu-toggle.scss',
  shadow: false,
  assetsDirs: ['assets']
})
export class MenuToggle {
  render() {
    return (
      <slot></slot>
    );
  }

}

