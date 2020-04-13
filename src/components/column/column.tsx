import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-column',
  styleUrl: 'column.scss',
  shadow: true
})
export class Column {
  @Prop() colspan: string = '1';
  @Prop() alignment: string = 'left';

  render() {
    return (
      <Host class={'align--' + this.alignment}>
        <slot></slot>
      </Host>
    );
  }

}
