import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'umc-title-block',
  styleUrl: 'title-block.scss',
  shadow: true
})
export class TitleBlock {
  @Prop() title: string;

  render() {
    return (
    <Host>{this.title}</Host>
    );
  }

}
