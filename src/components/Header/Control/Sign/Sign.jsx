import React, {Component} from 'react'
import {translate} from 'react-i18next'

import {StyledSign, StyledSignButton} from '../Sign'

@translate()
export class SASign extends Component {
    render() {
        const {t} = this.props

        return (
            <StyledSign>
                <StyledSignButton onClick={this.openSignInModal}>
                    {t('header.signIn')}
                </StyledSignButton>
            </StyledSign>
        )
    }

    openSignInModal = () => {
        console.log('Sign In')
    }
}
