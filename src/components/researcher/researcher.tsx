import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-researcher',
  styleUrl: 'researcher.scss',
  shadow: false
})
export class Researcher {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
