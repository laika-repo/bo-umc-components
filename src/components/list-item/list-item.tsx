import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-list-item',
  styleUrl: 'list-item.scss',
  shadow: true
})
export class ListItem {
  @Prop() label: string;

  render() {
    return (
        <Host>
          <slot name='icon-before'></slot>
          {this.label}
          <slot name='icon-after'></slot>
        </Host>
    );
  }

}
