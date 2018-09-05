import React, {Component} from 'react'

import {StyledSign, StyledSignButton} from '../Sign'

export class SASign extends Component {
    render() {
        return (
            <StyledSign>
                <StyledSignButton onClick={this.openSignInModal}>Войти</StyledSignButton>
            </StyledSign>
        )
    }

    openSignInModal = () => {
        console.log('Sign In')
    }
}
