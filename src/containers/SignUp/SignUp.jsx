import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {translate} from 'react-i18next'

import {SignUpForm} from '../../forms/SignUp'

@translate()
export class SignUp extends Component {
    render() {
        const {t} = this.props

        return (
            <Row type="flex" justify="center" align="center">
                <Col span={8}>
                    <h1>{t('forms.signUp.title')}</h1>
                    <SignUpForm />
                </Col>
            </Row>
        )
    }
}
