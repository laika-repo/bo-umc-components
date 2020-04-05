import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-menu-toggle',
  styleUrl: 'menu-toggle.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class MenuToggle {
  @Prop() label: string = "Required prop 'title' missing";
  @Prop() icon: string = "icon-hamburger.svg";
  @Prop() reverse: boolean = false;

  render() {
    return (
      
    <h3 class={this.reverse ? 'icon--before ' : ''}>
      <span class="label">{this.label}</span>
      <img class='icon' slot="2" src={this.icon} /> 
    </h3>
    );
  }

}

