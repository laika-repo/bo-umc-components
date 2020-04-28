import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-label',
  styleUrl: 'label.scss',
  shadow: true
})
export class Label {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
