import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-column-section',
  styleUrl: 'column-section.scss',
  shadow: false
})
export class ColumnSection {

  render() {
    return (
      <Host>
          <slot></slot>
      </Host>
    );
  }
}
