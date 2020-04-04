import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'umc-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs {
  @Element() el: HTMLElement;

  @State()
  tabs: HTMLUmcTabElement[] = [];

  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('umc-tab'));

    if(this.tabs.length == 0){
      throw new Error('[umc-tabs] must have at least one tab');
    }
  }

  render() {
    return (
      <Host>
        <ul>
        {this.tabs.map((tab: HTMLUmcTabElement) => {
          return <li class={tab.active ? 'active ' : ''}>{tab.label}</li>
        })}
      </ul>
      </Host>
    );
  }
}
