import React, {Component} from 'react'

import {SALanguage} from './Language'
import {SASign} from './Sign'
import {StyledControl} from '../Control'

export class SAControl extends Component {
    render() {
        return (
            <StyledControl>
                <SALanguage />
                <SASign />
            </StyledControl>
        )
    }
}
