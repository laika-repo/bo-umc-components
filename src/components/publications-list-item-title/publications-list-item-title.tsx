import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-publications-list-item-title',
  styleUrl: 'publications-list-item-title.scss',
  shadow: false
})
export class PublicationsListItemTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
