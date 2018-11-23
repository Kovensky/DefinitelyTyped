// Type definitions for React (react-dom) 16.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Josh Rutherford <https://github.com/theruther4d>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export as namespace ReactDOM;

import {
    ReactType, ReactInstance, ReactElement,
    Component, ComponentClass, ComponentState,
    TypedReactElement, SFCElement, CElement,
    DOMAttributes, DOMElement, ReactNode, ReactPortal,
    RefTypeOfProps, ComponentPropsWithRef, RefObject, ComponentElement, LegacyRef
} from 'react';

/**
 * @deprecated This only returns the first element of fragments
 */
export function findDOMNode(instance: ReactInstance): Element | null | Text;
export function unmountComponentAtNode(container: Element): boolean;

export function createPortal(children: ReactNode, container: Element, key?: null | string): ReactPortal;

export const version: string;
export const render: Renderer;
export const hydrate: Renderer;

export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
export function unstable_batchedUpdates(callback: () => any): void;

export function unstable_renderSubtreeIntoContainer<T extends Element>(
    parentComponent: Component<any>,
    element: DOMElement<DOMAttributes<T>, T>,
    container: Element,
    callback?: (element: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;

/** @deprecated Only used for the deprecated return type of ReactDOM.render */
export type ElementInstanceType<T extends { ref: any }> =
    NonNullable<NonNullable<Extract<T['ref'], RefObject<any>>>['current']>;

export interface Renderer {
    // Deprecated(render): The return value is deprecated.
    // In future releases the render function's return type will be void.

    <T extends DOMElement<DOMAttributes<any>, any> | ComponentElement<any, any> | TypedReactElement<any>>(
        element: T,
        container: Element | null,
        callback?: () => void
    ): ElementInstanceType<T>;

    (
        element: Array<DOMElement<DOMAttributes<any>, any>>,
        container: Element | null,
        callback?: () => void
    ): Element;

    (
        element: Array<SFCElement<any>>,
        container: Element | null,
        callback?: () => void
    ): void;

    (
        element: Array<CElement<any, Component<any, ComponentState>>>,
        container: Element | null,
        callback?: () => void
    ): Component<any, ComponentState>;

    (
        element: Array<ReactElement<any>>,
        container: Element | null,
        callback?: () => void
    ): Component<any, ComponentState> | Element | void;

    <P>(
        element: ReactElement<P>,
        container: Element | null,
        callback?: () => void
    ): Component<P, ComponentState> | Element | void;

    (
        parentComponent: Component<any> | Array<Component<any>>,
        element: SFCElement<any>,
        container: Element,
        callback?: () => void
    ): void;
}
