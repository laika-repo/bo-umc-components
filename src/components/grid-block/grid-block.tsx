import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-grid-block',
  styleUrl: 'grid-block.css',
  shadow: true
})
export class GridBlock {

  render() {
    return (
      <Host>
        <h4><slot name="1"></slot></h4>
      </Host>
    );
  }

}
