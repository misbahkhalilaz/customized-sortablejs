import { HTMLElement } from './override';
import { Void } from './global';
import Sortable from '../Sortable';
import { closest, on, css } from '../utils';

export interface SortableOptions {
  preventOnFilter?: boolean;
  animation?: number;
  easing?: boolean | null;
  dataIdAttr?: string;
  delay?: number;
  delayOnTouchOnly?: boolean;
  emptyInsertThreshold?: number;
  swapThreshold?: number;
  invertSwap?: boolean;
  invertedSwapThreshold?: number | null;
  ignore?: string;
  filter?:
    | ((evt: Event, target: EventTarget, sortable: Sortable) => string)
    | string
    | boolean
    | null;
  handle?: string | null;
  disabled?: boolean;
  sort?: boolean;
  forceFallback?: boolean;
  touchStartThreshold?: number;
  supportPointer?: boolean;
  store?: {
    get: (element: Sortable) => Sortable | string[];
    set: (element: Sortable) => void;
  } | null;
  direction?: (evt: Event, target: EventTarget, dragEl: HTMLElement) => string;
  dragClass?: string;
  ghostClass?: string;
  dragoverBubble?: any;
  fallbackTolerance?: any;
  fallbackOffset?: any;
  fallbackOnBody?: any;
  fallbackClass?: string;
  chosenClass?: string;
  removeCloneOnHide?: any;
  setData?: any;
  draggable?: string;
  dropBubble?: any;
  group?: string | null;
}

export interface SortableGroup {
  name?: string;
  revertClone?: unknown;
  checkPull?: (
    _this: Sortable,
    activeSortable: Sortable,
    dragEl: HTMLElement,
    evt: Event
  ) => void;
  checkPut?: (
    _this: Sortable,
    activeSortable: Sortable,
    dragEl: HTMLElement,
    evt: Event
  ) => void;
  pull?: ToFnValueCB;
  put?: ToFnValueCB;
}

export interface SortableUtils {
  on: typeof on;
  off: (el: HTMLElement, event: string, fn: Void) => void;
  css: ReturnType<css>;
  find: (
    ctx: HTMLElement,
    tagName: string,
    iterator: (el: Element, i: number) => void
  ) => unknown[] | HTMLCollectionOf<Element>;
  is: (el: HTMLElement, selector: string) => boolean;
  extend: (
    dst: Record<string | number, unknown>,
    src: Record<string | number, unknown>
  ) => Record<string | number, unknown>;
  throttle: (
    callback: (args: IArguments) => void,
    ms: number
  ) => (this: ThisType<Void>) => void;
  closest: typeof closest;
  toggleClass: (el: HTMLElement, name: string, state: boolean) => void;
  clone: (el: HTMLElement) => number | void | Node;
  index: (el: HTMLElement, selector: string) => number;
  nextTick: (fn: any) => NodeJS.Timeout;
  cancelNextTick: (id: any) => void;
  detectDirection: (el: any, options: any) => 'vertical' | 'horizontal';
  getChild: (
    el: HTMLElement,
    childNum: number,
    options: Object,
    includeDragEl: boolean
  ) => Element | null;
}

export type ToFnValueCB = (
  to: Sortable,
  from: Sortable,
  dragEl: HTMLElement,
  evt: Event
) => null;
