import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-research-item',
  styleUrl: 'research-item.scss',
  shadow: false
})
export class ResearchItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
