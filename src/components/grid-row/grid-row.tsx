import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-grid-row',
  styleUrl: 'grid-row.css',
  shadow: true
})
export class GridRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
