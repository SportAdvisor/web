import React, {Component} from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {translate} from 'react-i18next'

import {Translate} from '../../i18n/translate'

const FormItem = Form.Item

@translate()
class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const formsTranslate = new Translate('forms.fields', this.props.t)

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem label={formsTranslate.translate('email.label')}>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: formsTranslate.translate(
                                    'email.validationMessages.invalid'
                                )
                            },
                            {
                                required: true,
                                message: formsTranslate.translate(
                                    'email.validationMessages.required'
                                )
                            }
                        ]
                    })(<Input />)}
                </FormItem>
                <FormItem label={formsTranslate.translate('password.label')}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: formsTranslate.translate(
                                    'password.validationMessages.required'
                                )
                            }
                        ]
                    })(<Input type="password" />)}
                </FormItem>
                <FormItem label={formsTranslate.translate('name.label')}>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: formsTranslate.translate(
                                    'name.validationMessages.required'
                                ),
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                        rules: [
                            {
                                required: true,
                                message: formsTranslate.translate(
                                    'agreement.validationMessages.required'
                                )
                            }
                        ]
                    })(
                        <Checkbox>
                            {formsTranslate.translate('agreement.label')}{' '}
                            <a href="">{formsTranslate.translate('agreement.document')} </a>
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
}

export const SignUpForm = Form.create()(SignUp)
