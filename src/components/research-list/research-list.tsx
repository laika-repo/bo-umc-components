import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-research-list',
  styleUrl: 'research-list.scss',
  shadow: false
})
export class ResearchList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
