import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-list-item',
  styleUrl: 'list-item.scss',
  shadow: true
})
export class ListItem {
  @Prop() label: string;
  @Prop() href: string;

  render() {
    return (
        <Host>
          <slot name='icon-before'></slot>
          {this.href
            ? <a href={this.href}>{this.label}</a>
            : this.label
          }
          
          <slot name='icon-after'></slot>
        </Host>
    );
  }

}
