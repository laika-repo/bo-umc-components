import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-header-section',
  styleUrl: 'header-section.scss',
  shadow: true
})
export class HeaderSection {
  

  render() {
    return (
      <Host>
        <section class="container">
          <div class="grid-item-container grid-item-container--left"><slot name="1"/></div>
          <div class="grid-item-container grid-item-container--middle"><slot name="2"/></div>
          <div class="grid-item-container grid-item-container--right"><slot name="3"/></div>
      </section>
      </Host>
      
    );
  }
}
