import React, {Component} from 'react'

export default class RecipeLanding extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                Hello!
                {this.props.children}
            </div>
        )
    }
}