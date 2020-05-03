import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-listing-block',
  styleUrl: 'listing-block.scss',
  shadow: false
})
export class ListingBlock {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
