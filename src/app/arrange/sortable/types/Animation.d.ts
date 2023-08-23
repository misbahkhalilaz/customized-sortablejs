import { IHTMLElement } from './override';

export interface AnimationState {
  target: IHTMLElement;
  rect: Partial<ICSSStyleDeclaration>;
}
