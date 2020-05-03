import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-publications-list-item-authors',
  styleUrl: 'publications-list-item-authors.scss',
  shadow: false
})
export class PublicationsListItemAuthors {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
