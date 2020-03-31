import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'umc-grid-section',
  styleUrl: 'grid-section.scss',
  shadow: true
})
export class GridSection {
  @Prop() cols: number;

  render() {
    return (
      <h4>Cols: {this.cols}</h4>

      <div class="row">
        <div class="column"></div>
        <div class="column"></div>
      </div>
      
    );
  }

}
