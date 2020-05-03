import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-publications-list-item',
  styleUrl: 'publications-list-item.scss',
  shadow: false
})
export class PublicationsListItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
