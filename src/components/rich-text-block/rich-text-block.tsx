import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-rich-text-block',
  styleUrl: 'rich-text-block.css',
  shadow: true
})
export class RichTextBlock {

  render() {
    return (
      <Host>
        <slot>hello?</slot>
      </Host>
    );
  }

}
