import { SortableOptions } from './Sortable';
import { IHTMLElement } from './override';

declare global {
  var modifiedValue: SortableOptions[keyof SortableOptions] | undefined;

  interface Window {
    CSSMatrix: string;
    MSCSSMatrix: unknown;
    Polymer: {
      dom: (el: IHTMLElement) => { cloneNode: (arg: boolean) => void };
    };
    jQuery: (el: IHTMLElement) => { clone: (arg: boolean) => number[] };
    Zepto: Object;
  }

  interface Element {
    style: CSSStyleDeclaration & {
      'will-change': string;
    };
  }

  interface Event {
    pointerType?: string;
    path?: string | string[];
    button?: number;
    dataTransfer: {
      effectAllowed: string;
    };
    rootEl?: IHTMLElement;
  }

  interface EventTarget {
    isContentEditable?: boolean;
    dataTransfer?: unknown;
    animated?: unknown;
    animatingX?: unknown;
    animatingY?: unknown;
    toRect?: unknown;
    nextElementSibling?: IHTMLElement;
  }

  interface Document {
    selection: Selection;
  }

  interface MouseEvent {
    rootEl?: IHTMLElement;
  }
}

export type Void = () => void;

export enum CustomEvent {
  POINTERDOWN = 'pointerdown',
}
