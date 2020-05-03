import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-researchers-list',
  styleUrl: 'researchers-list.css',
  shadow: true
})
export class ResearchersList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
