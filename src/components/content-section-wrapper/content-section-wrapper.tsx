import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-content-section-wrapper',
  styleUrl: 'content-section-wrapper.scss',
  shadow: false
})
export class ContentSectionWrapper {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
