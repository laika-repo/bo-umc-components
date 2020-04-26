import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-search-input',
  styleUrl: 'search-input.scss',
  shadow: false
})
export class SearchInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
