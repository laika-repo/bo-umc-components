import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-content-block',
  styleUrl: 'content-block.scss',
  shadow: true
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
