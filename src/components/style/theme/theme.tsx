import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-theme',
  styleUrl: 'theme.scss',
  shadow: false
})
export class Theme {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
