import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-section',
  styleUrl: 'section.scss',
  shadow: true
})
export class Section {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
