import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-content-block',
  styleUrl: 'content-block.scss',
  shadow: false
})
export class ContentBlock {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
