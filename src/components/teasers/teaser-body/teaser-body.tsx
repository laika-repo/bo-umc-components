import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-body',
  styleUrl: 'teaser-body.scss',
  shadow: false
})
export class TeaserBody {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
