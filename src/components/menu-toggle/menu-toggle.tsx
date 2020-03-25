import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'umc-menu-toggle',
  styleUrl: 'menu-toggle.scss',
  shadow: true
})
export class MenuToggle {
  @Prop() title: string = "Required prop 'title' missing";

  render() {
    return (
    <h3>{this.title}</h3>
    );
  }

}
