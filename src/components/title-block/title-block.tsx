import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'umc-title-block',
  styleUrl: 'title-block.scss',
  shadow: true
})
export class TitleBlock {
  @Prop() title: string;
  @Prop() size: string = 'regular';

  render() {
    return (
    <Host class={this.size}>{this.title}</Host>
    );
  }

}
