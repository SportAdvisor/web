import React, {Component} from 'react'

import {StyledHomeScreen} from './Styled'
import {SAHeader} from '../Header'

export class SAHomeScreen extends Component {
    render() {
        return (
            <StyledHomeScreen>
                <SAHeader />
            </StyledHomeScreen>
        )
    }
}
