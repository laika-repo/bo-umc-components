import { Component, State, EventEmitter, Event, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'umc-style-section',
  styleUrl: 'style-section.scss',
  shadow: true
})
export class StyleSection {
  @State() toggle: boolean = false;
  @Event() onToggle: EventEmitter;
  @Prop() title: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <Host class={this.toggle ? 'open' : 'closed'}>
        <div class='section-header' onClick={() => this.toggleComponent()}>
          {this.title ? <h3>{this.title} <span class='arrow closed'>&#x25C2;</span> <span class='arrow open'>&#x25BE;</span></h3> : ''} 
        </div>
        <div class='section-content'>
          <slot></slot>
        </div>
      </Host>
    );
  }

}


{/* <button class="accordion"
      style={{
        width: this.width,
        backgroundColor: this.color,
      }}
      onClick={() => this.toggleComponent()}>
      {this.label}
      {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>
      <div class={`content-box ${this.toggle ? 'open' : 'close'}`} */}