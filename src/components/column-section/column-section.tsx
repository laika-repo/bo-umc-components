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
          <slot></slot>
      </Host>
    );
  }
}
