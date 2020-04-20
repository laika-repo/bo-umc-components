import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() label: string;

  render() {
    return (
      <Host>
        {this.label}
      </Host>
    );
  }

}