export interface IHTMLElement extends HTMLElement {
  animated: any;
  msMatchesSelector: (selector: string) => void;
  currentStyle: CSSStyleDeclaration;
  host: {
    nodeType: string;
  };
  toRect: unknown;
}
