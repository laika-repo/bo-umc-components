import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-button',
  styleUrl: 'button.scss',
  shadow: false
})
export class Button {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
