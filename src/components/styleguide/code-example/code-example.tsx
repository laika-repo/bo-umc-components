import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'umc-code-example',
  styleUrl: 'code-example.scss',
  shadow: false
})
export class CodeExample {

  render() {
    return (
      <Host>
        <pre>
        <slot></slot>
        </pre>
        
      </Host>
    );
  }

}
