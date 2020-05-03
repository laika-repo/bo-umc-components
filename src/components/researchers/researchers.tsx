import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-researchers',
  styleUrl: 'researchers.scss',
  shadow: false
})
export class Researchers {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
