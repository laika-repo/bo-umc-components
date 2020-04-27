import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-teaser-section',
  styleUrl: 'teaser-section.scss',
  shadow: false
})
export class TeaserSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
