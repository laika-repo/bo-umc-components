import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-color-swatch',
  styleUrl: 'color-swatch.scss',
  shadow: true
})
export class ColorSwatch {
  @Prop() name: string = "Required prop 'name' missing";

  render() {
    return (
      <Host class={'swatch' + ' ' + this.name}></Host>
    );
  }

}
