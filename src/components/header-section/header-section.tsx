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
        <slot name="left"/>
        <slot name="middle"/>
        <slot name="right"/>
      </Host>
    );
  }
}
