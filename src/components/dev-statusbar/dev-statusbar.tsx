import { Component, h } from '@stencil/core';

@Component({
  tag: 'umc-dev-statusbar',
  styleUrl: 'dev-statusbar.scss',
  shadow: true
})
export class DevStatusbar {

  render() {
    return (
      <ul>
        <li class="screen--small">small screen</li>
        <li class="screen--medium">medium screen</li>
        <li class="screen--large">large screen</li>
        <li class="screen--x-large">x-large screen</li>
      </ul>
    );
  }

}
