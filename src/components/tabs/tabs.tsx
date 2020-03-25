import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'umc-tabs',
  styleUrl: 'tabs.css',
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
      <ul>
        {this.tabs.map((tab: HTMLUmcTabElement, index: number) => {
        return <li>{tab.label}</li>
        })}
      </ul>
    );
  }

}
