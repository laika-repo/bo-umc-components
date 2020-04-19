import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-header-section',
  styleUrl: 'header-section.scss',
  shadow: true
})
export class HeaderSection {
  

  render() {
    return (
      <Host>
        <slot name="left"></slot>
        <slot name="middle"></slot>
        <slot name="right"></slot>
      </Host>
    );
  }
}
