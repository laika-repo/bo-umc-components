import { Component, Host, h, Element, State, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'umc-link-list',
  styleUrl: 'link-list.scss',
  shadow: true,
})
export class LinkList {
  @Element() el: HTMLElement;
  @Prop() orientation: string = 'vertical';
  @Prop() title: string;
  

  @State()
  items: HTMLUmcLinkListItemElement[] = [];

  componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll('umc-link-list-item'));

    if(this.items.length == 0){
      throw new Error('[umc-tabs] must have at least one tab');
    }
  }

  render() {
    return (
      <Host>
        {this.title ? <h3>{this.title}</h3> : ''}

        <ul class={this.orientation}>
        {this.items.map((item: HTMLUmcLinkListItemElement) => {
          return <li class={item.active ? 'active ' : ''}>{item.label} <img class='icon' src={item.icon} /></li>
        })}
      </ul>
      </Host>
    );
  }
}
