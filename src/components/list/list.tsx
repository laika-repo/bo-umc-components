import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {
  @Prop() orientation: string = 'vertical';
  @Prop() title: string;

  render() {
    return (
      <Host class={'align--' + this.orientation}>
        {this.title ? <h3>{this.title}</h3> : ''}
        <ul>
          <slot></slot>
        </ul>
        </Host>
    );
  }

}
