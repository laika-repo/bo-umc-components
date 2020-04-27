import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-hero-image',
  styleUrl: 'hero-image.scss',
  shadow: false
})
export class HeroImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
