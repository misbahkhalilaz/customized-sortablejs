export interface IHTMLElement extends HTMLElement {
  animated: any;
  msMatchesSelector: (selector: string) => void;
  currentStyle: ICSSStyleDeclaration;
  host: {
    nodeType: string;
  };
  toRect: Partial<ICSSStyleDeclaration> | null;
  fromRect: Partial<ICSSStyleDeclaration> | null;
  prevToRect: Partial<ICSSStyleDeclaration> | null;
  prevFromRect: Partial<ICSSStyleDeclaration> | null;
  thisAnimationDuration?: number | null;
  animationResetTimer?: NodeJS.Timeout;
  animationTime?: number;
}

export interface ICSSStyleDeclaration extends CSSStyleDeclaration {
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
}
