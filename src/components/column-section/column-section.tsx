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
          <div class="column"><slot name="1"/></div>
          <div class="column"><slot name="2"/></div>
          <div class="column"><slot name="3"/></div>
      </Host>
    );
  }

}
