import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-publications-list-item-publication',
  styleUrl: 'publications-list-item-publication.scss',
  shadow: false
})
export class PublicationsListItemPublication {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
