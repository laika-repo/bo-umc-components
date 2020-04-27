import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-hero-section',
  styleUrl: 'hero-section.scss',
  shadow: false
})
export class HeroSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
