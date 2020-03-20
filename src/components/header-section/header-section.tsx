import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-header-section',
  styleUrl: 'header-section.css',
  shadow: true
})
export class HeaderSection {

  render() {
    return (
      <Host>
        <section class="container">
          <div class="grid-item-container"><slot name="1"/></div>
          <div class="grid-item-container"><slot name="2"/></div>
          <div class="grid-item-container"><slot name="3"/></div>
        </section>
      </Host>
    );
  }

}
