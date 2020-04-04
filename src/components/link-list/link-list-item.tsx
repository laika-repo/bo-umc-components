import { Component, Prop } from "@stencil/core";

@Component({
    tag: 'umc-link-list-item',
    shadow: true
})

export class linkListItem {
    @Prop() label: string;
    @Prop() href: string;
    @Prop() icon: string;
    @Prop() active: boolean = false;
}