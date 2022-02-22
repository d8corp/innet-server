import { Children, Component, Props } from '@innet/jsx';
import { Handler } from 'innet';
import Action, { Body } from '../Action';
export interface ActionComponent<B extends Body> extends Component {
    action: Action<B>;
}
export interface RequestComponentConstructor<B extends Body> {
    new (props?: Props, children?: Children, handler?: Handler): ActionComponent<B>;
    [key: string]: any;
}
export default function withAction<B extends Body, T extends RequestComponentConstructor<B>>(target: T): T;
