import React, {Component} from 'react'

import {SALogo, SAMenu, SAControl} from '../Header'
import {StyledHeader} from './Styled'

export class SAHeader extends Component {
    render() {
        return (
            <StyledHeader>
                <SALogo />
                <SAMenu />
                <SAControl />
            </StyledHeader>
        )
    }
}
