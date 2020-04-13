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
        <li class="screen--small">Mobile and up</li>
        <li class="screen--medium">Tablet portrait and up</li>
        <li class="screen--large">Tablet landscape and up</li>
        <li class="screen--x-large">Desktop and up</li>
      </ul>
    );
  }
}
