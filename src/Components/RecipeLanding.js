import React, {Component} from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'

export default class RecipeLanding extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav>
                    {/* Another instance of using props.children. I'm passing recipes here, but I could pass a styled div with a lot more thing in my nav and it's completely reusable */}
                    <Link to="/recipes" replace>Recipes</Link>
                </Nav>
                {/* this.props.children here will be decided by the route we are at because RecipeLanding is being used as the top level component of a nested route */}
                {this.props.children}
            </div>
        )
    }
}