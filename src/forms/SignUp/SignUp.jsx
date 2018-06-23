import React, {Component} from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {translate} from 'react-i18next'

import {makeErrorFieldsMap} from '../../utils/forms'

const FormItem = Form.Item

@translate()
class SignUp extends Component {
    render() {
        const {
            t,
            form: {getFieldDecorator}
        } = this.props

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem label={t('forms.fields.email.label')}>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: t('forms.fields.email.validationMessages.invalid')
                            },
                            {
                                required: true,
                                message: t('forms.fields.email.validationMessages.required')
                            }
                        ]
                    })(<Input />)}
                </FormItem>
                <FormItem label={t('forms.fields.password.label')}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: t('forms.fields.password.validationMessages.required')
                            }
                        ]
                    })(<Input type="password" />)}
                </FormItem>
                <FormItem label={t('forms.fields.name.label')}>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: t('forms.fields.name.validationMessages.required'),
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('EULA', {
                        valuePropName: 'checked',
                        rules: [
                            {
                                required: true,
                                message: t('forms.fields.eula.validationMessages.required')
                            }
                        ]
                    })(
                        <Checkbox>
                            {t('forms.fields.eula.label')}{' '}
                            <a href="">{t('forms.fields.eula.document')} </a>
                        </Checkbox>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </FormItem>
            </Form>
        )
    }

    handleSubmit = e => {
        const {form, actions} = this.props
        e.preventDefault()
        form.validateFields((err, values) => {
            if (!err) {
                actions
                    .signUp(values)
                    .then(response => {
                        actions.setTokens(response.value.data.data)
                        actions.push('/')
                    })
                    .catch(e => {
                        const errorFieldsMap = makeErrorFieldsMap(e.response.data.errors, values)
                        form.setFields(errorFieldsMap)
                    })
            }
        })
    }
}

export const SignUpForm = Form.create()(SignUp)
