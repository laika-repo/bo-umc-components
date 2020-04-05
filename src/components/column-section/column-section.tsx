import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-column-section',
  styleUrl: 'column-section.scss',
  shadow: true
})
export class ColumnSection {

  render() {
    return (
      <Host>
          <slot name='1'></slot>
          <slot name='2'></slot>
          <slot name='3'></slot>
      </Host>
    );
  }
}
