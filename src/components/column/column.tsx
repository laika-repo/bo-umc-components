import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-column',
  styleUrl: 'column.scss',
  shadow: false
})
export class Column {
  @Prop() colspan: string = '1';
  @Prop() alignment: string = 'left';
  @Prop() width: string = 'single';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
