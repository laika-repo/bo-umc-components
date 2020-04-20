import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-rich-text-block',
  styleUrl: 'rich-text-block.scss',
  shadow: false
})
export class RichTextBlock {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
