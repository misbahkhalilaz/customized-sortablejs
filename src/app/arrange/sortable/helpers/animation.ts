import { ICSSStyleDeclaration, IHTMLElement, SortableOptions } from '../types';

export const repaint = (target: IHTMLElement) => {
  return target.offsetWidth;
};

export const calculateRealTime = (
  animatingRect: Partial<ICSSStyleDeclaration>,
  fromRect: Partial<ICSSStyleDeclaration>,
  toRect: Partial<ICSSStyleDeclaration>,
  options: SortableOptions
) => {
  return (
    (Math.sqrt(
      Math.pow(fromRect.top! - animatingRect.top!, 2) +
        Math.pow(fromRect.left! - animatingRect.left!, 2)
    ) /
      Math.sqrt(
        Math.pow(fromRect.top! - toRect.top!, 2) +
          Math.pow(fromRect.left! - toRect.left!, 2)
      )) *
    options.animation!
  );
};
