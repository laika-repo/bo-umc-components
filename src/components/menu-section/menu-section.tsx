import { Component, State, EventEmitter, Event, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-menu-section',
  styleUrl: 'menu-section.scss',
  shadow: false
})
export class MenuSection {
  @State() toggle: boolean = true;
  @Event() onToggle: EventEmitter;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <Host class={this.toggle ? 'open' : 'closed'}>
        <slot name='navigation'></slot>
        {/* <slot name='navigation' onClick={() => this.toggleComponent()}></slot> */}
        <slot name='menu'></slot>
      </Host>
    );
  }

}
