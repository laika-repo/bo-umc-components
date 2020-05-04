import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-tag-list',
  styleUrl: 'tag-list.scss',
  shadow: false
})
export class TagList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
