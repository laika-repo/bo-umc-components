import { Component, Prop } from "@stencil/core";

@Component({
    tag: 'umc-tab',
    shadow: true
})

export class tab {
    @Prop() label: string;
    @Prop() active: boolean;
    @Prop({reflectToAttr: true }) disabled: boolean;
}