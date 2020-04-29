import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'umc-logo',
  styleUrl: 'logo.scss',
  shadow: false
})
export class Logo {
  @Prop() src = "logo-aumc.svg";

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
