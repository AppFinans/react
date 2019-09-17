import React, {
    Component,
    Fragment,
    Children,
    cloneElement
} from 'react';

/**
 * PROPS
 * title: () => JSX
 */

export class Clickable extends Component {
    render() {
        const child = Children.only( this.props.children );
        return cloneElement(
            child,
            {
                onClick: this.props.onClick,
                style: { cursor: "pointer" }
            }
        )
    }
}

export default class App extends Component {
    state = {
        open: false
    }
    toggle () {
        this.setState( { open: ! this.state.open } );
    }
    render () {
        console.log( this.props.title ? this.props.title() : null )
        return (
            <Fragment>
                <Clickable
                    onClick={ ev => this.toggle() }
                >
                    { this.props.title() }
                </Clickable>
                <div className={ ( this.state.open ? "d-block" : "d-none" ) }>
                    { this.props.children }
                </div>
            </Fragment>
        );
    }
}