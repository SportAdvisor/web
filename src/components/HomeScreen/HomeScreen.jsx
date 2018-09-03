import React, {Component} from 'react'

import {SAHomeScreen} from './Styled'
import {SAHeader, SALogo} from '../Header'
import logo from 'static/icons/logo.svg'

export class HomeScreen extends Component {
    render() {
        return (
            <SAHomeScreen>
                <SAHeader>
                    <SALogo src={logo} alt="Sport Advisor" />
                </SAHeader>
            </SAHomeScreen>
        )
    }
}
