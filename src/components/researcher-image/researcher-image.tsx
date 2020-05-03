import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-researcher-image',
  styleUrl: 'researcher-image.scss',
  shadow: false
})
export class ResearcherImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
