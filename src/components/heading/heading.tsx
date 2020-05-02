import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-heading',
  styleUrl: 'heading.scss',
  shadow: false
})
export class Heading {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
