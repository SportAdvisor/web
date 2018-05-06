import React, {Component} from 'react'
import {Layout, Menu} from 'antd'
import {Switch, Route} from 'react-router-dom'
import {translate} from 'react-i18next'
import {LocaleProvider} from 'antd'

import {antdLocaleDetect} from '../../i18n'
import {Home} from '../Home'
import {SignUp} from '../SignUp'
import {SignIn} from '../SignIn'

import './App.scss'

const {Header, Content, Footer, Sider} = Layout

@translate()
export class App extends Component {
    render() {
        const {t, i18n} = this.props
        return (
            <LocaleProvider locale={antdLocaleDetect(i18n)}>
                <Layout>
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height: '100%'}} />
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/sign-up" component={SignUp}
                                /><Route exact path="/sign-in" component={SignIn}
                            /></Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2016 Created by Ant UED</Footer>
            </Layout></LocaleProvider>
        )
    }
}
