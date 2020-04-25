import { Component, State, EventEmitter, Event, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-section',
  styleUrl: 'section.scss',
  shadow: false
})
export class Section {
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
