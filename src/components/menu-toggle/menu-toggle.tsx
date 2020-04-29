import { Component, State, EventEmitter, Event, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-menu-toggle',
  styleUrl: 'menu-toggle.scss',
  shadow: false,
  assetsDirs: ['assets']
})
export class MenuToggle {
  @State() toggle: boolean = true;
  @Event() onToggle: EventEmitter;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <Host class={this.toggle ? 'open' : 'closed'}>
        <slot></slot>
      </Host> 
    );
  }

}

