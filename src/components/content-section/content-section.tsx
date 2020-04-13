import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-content-section',
  styleUrl: 'content-section.scss',
  shadow: true
})
export class ContentSection {

  render() {
    return (
      <Host>
        <slot name='main'></slot>
        <slot name='sidebar'></slot>
      </Host>
    );
  }

}
