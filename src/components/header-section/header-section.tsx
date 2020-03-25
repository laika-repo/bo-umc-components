import { Component, Prop, getAssetPath, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-header-section',
  styleUrl: 'header-section.scss',
  assetsDirs: ['assets'],
  shadow: true
})
export class HeaderSection {
  @Prop() logo = "logo-aumc.svg";

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
