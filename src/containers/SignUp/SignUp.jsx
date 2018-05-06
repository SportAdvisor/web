import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {SignUpForm} from '../../forms/SignUp'

export class SignUp extends Component {
    render() {
        return (
            <Row type="flex" justify="center" align="center">
                <Col span={8}>
                    <h1>Sign Up</h1>
                    <SignUpForm />
                </Col>
            </Row>
        )
    }
}
