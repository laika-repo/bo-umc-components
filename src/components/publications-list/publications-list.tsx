import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-publications-list',
  styleUrl: 'publications-list.scss',
  shadow: false
})
export class PublicationsList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
