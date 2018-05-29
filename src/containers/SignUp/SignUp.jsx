import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {Row, Col} from 'antd'
import {translate} from 'react-i18next'

import {SignUpForm} from '../../forms/SignUp'
import {signUp} from '../../modules/signUp'
import {setTokens} from '../../modules/auth'

@translate()
class SignUp extends Component {
    render() {
        const {t, actions} = this.props

        return (
            <Row type="flex" justify="center" align="center">
                <Col span={8}>
                    <h1>{t('forms.signUp.title')}</h1>
                    <SignUpForm actions={actions} />
                </Col>
            </Row>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            ...bindActionCreators({signUp, setTokens, push}, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
