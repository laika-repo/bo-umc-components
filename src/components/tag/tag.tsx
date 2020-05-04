import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-tag',
  styleUrl: 'tag.scss',
  shadow: false
})
export class Tag {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
