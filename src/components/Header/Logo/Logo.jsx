import React, {Component} from 'react'

import {StyledLogo} from './Styled'
import logo from 'static/icons/logo.svg'

export class SALogo extends Component {
    render() {
        return (
            <StyledLogo to="/">
                <img src={logo} alt="Sport Advisor" />
                <span>Sport Advisor</span>
            </StyledLogo>
        )
    }
}
