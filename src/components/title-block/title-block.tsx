import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-title-block',
  styleUrl: 'title-block.scss',
  shadow: false
})
export class TitleBlock {
  render() {
    return (
    <Host>
        <slot></slot>
      </Host>
    );
  }

}
