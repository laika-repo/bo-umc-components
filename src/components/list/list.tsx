import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {
  @Prop() title: string;

  render() {
    return (
      <Host>
        <slot></slot>
        </Host>
    );
  }

}
