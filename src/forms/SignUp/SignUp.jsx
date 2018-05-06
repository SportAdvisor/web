import React, {Component} from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
const FormItem = Form.Item

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

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!'
                            }
                        ]
                    })(<Input />)}
                </FormItem>
                <FormItem label="Password">
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                        ]
                    })(<Input type="password" />)}
                </FormItem>
                <FormItem label="Name">
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your name!',
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
                                message: 'Please click on checkbox!'
                            }
                        ]
                    })(
                        <Checkbox>
                            I have read the <a href="">agreement</a>
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
