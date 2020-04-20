import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-icon',
  styleUrl: 'icon.scss',
  shadow: false
})
export class Icon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
