import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-breadcrumbs',
  styleUrl: 'breadcrumbs.scss',
  shadow: false
})
export class Breadcrumbs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
