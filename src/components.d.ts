/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface UmcColumn {}
  interface UmcGridRow {}
  interface UmcGridSection {
    'cols': number;
  }
  interface UmcHeaderSection {
    'logo': string;
  }
  interface UmcMenuToggle {
    'title': string;
  }
  interface UmcTab {
    'active': boolean;
    'disabled': boolean;
    'label': string;
  }
  interface UmcTabs {}
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLUmcColumnElement extends Components.UmcColumn, HTMLStencilElement {}
  var HTMLUmcColumnElement: {
    prototype: HTMLUmcColumnElement;
    new (): HTMLUmcColumnElement;
  };

  interface HTMLUmcGridRowElement extends Components.UmcGridRow, HTMLStencilElement {}
  var HTMLUmcGridRowElement: {
    prototype: HTMLUmcGridRowElement;
    new (): HTMLUmcGridRowElement;
  };

  interface HTMLUmcGridSectionElement extends Components.UmcGridSection, HTMLStencilElement {}
  var HTMLUmcGridSectionElement: {
    prototype: HTMLUmcGridSectionElement;
    new (): HTMLUmcGridSectionElement;
  };

  interface HTMLUmcHeaderSectionElement extends Components.UmcHeaderSection, HTMLStencilElement {}
  var HTMLUmcHeaderSectionElement: {
    prototype: HTMLUmcHeaderSectionElement;
    new (): HTMLUmcHeaderSectionElement;
  };

  interface HTMLUmcMenuToggleElement extends Components.UmcMenuToggle, HTMLStencilElement {}
  var HTMLUmcMenuToggleElement: {
    prototype: HTMLUmcMenuToggleElement;
    new (): HTMLUmcMenuToggleElement;
  };

  interface HTMLUmcTabElement extends Components.UmcTab, HTMLStencilElement {}
  var HTMLUmcTabElement: {
    prototype: HTMLUmcTabElement;
    new (): HTMLUmcTabElement;
  };

  interface HTMLUmcTabsElement extends Components.UmcTabs, HTMLStencilElement {}
  var HTMLUmcTabsElement: {
    prototype: HTMLUmcTabsElement;
    new (): HTMLUmcTabsElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'umc-column': HTMLUmcColumnElement;
    'umc-grid-row': HTMLUmcGridRowElement;
    'umc-grid-section': HTMLUmcGridSectionElement;
    'umc-header-section': HTMLUmcHeaderSectionElement;
    'umc-menu-toggle': HTMLUmcMenuToggleElement;
    'umc-tab': HTMLUmcTabElement;
    'umc-tabs': HTMLUmcTabsElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface UmcColumn {}
  interface UmcGridRow {}
  interface UmcGridSection {
    'cols'?: number;
  }
  interface UmcHeaderSection {
    'logo'?: string;
  }
  interface UmcMenuToggle {
    'title'?: string;
  }
  interface UmcTab {
    'active'?: boolean;
    'disabled'?: boolean;
    'label'?: string;
  }
  interface UmcTabs {}

  interface IntrinsicElements {
    'my-component': MyComponent;
    'umc-column': UmcColumn;
    'umc-grid-row': UmcGridRow;
    'umc-grid-section': UmcGridSection;
    'umc-header-section': UmcHeaderSection;
    'umc-menu-toggle': UmcMenuToggle;
    'umc-tab': UmcTab;
    'umc-tabs': UmcTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'umc-column': LocalJSX.UmcColumn & JSXBase.HTMLAttributes<HTMLUmcColumnElement>;
      'umc-grid-row': LocalJSX.UmcGridRow & JSXBase.HTMLAttributes<HTMLUmcGridRowElement>;
      'umc-grid-section': LocalJSX.UmcGridSection & JSXBase.HTMLAttributes<HTMLUmcGridSectionElement>;
      'umc-header-section': LocalJSX.UmcHeaderSection & JSXBase.HTMLAttributes<HTMLUmcHeaderSectionElement>;
      'umc-menu-toggle': LocalJSX.UmcMenuToggle & JSXBase.HTMLAttributes<HTMLUmcMenuToggleElement>;
      'umc-tab': LocalJSX.UmcTab & JSXBase.HTMLAttributes<HTMLUmcTabElement>;
      'umc-tabs': LocalJSX.UmcTabs & JSXBase.HTMLAttributes<HTMLUmcTabsElement>;
    }
  }
}


