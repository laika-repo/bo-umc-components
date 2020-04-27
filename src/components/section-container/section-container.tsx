import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-section-container',
  styleUrl: 'section-container.scss',
  shadow: false
})
export class SectionContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
