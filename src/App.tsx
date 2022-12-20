import React, {Component} from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {persistor} from "./Redux/redux-store";
import {Header} from "./components/Header/Header"
import {Checkout} from "./components/Auth/Checkout";
import {SignIn} from "./components/Auth/Auth/SignIn";
import {SignUp} from "./components/Auth/Auth/SignUp";
import {Homepage} from "./components/Homepage/Homepage";
import {SendEmail} from "./components/SendEmail/SendEmail";
import "antd/dist/antd.css";
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';

const {Content, Sider} = Layout;

const items = [
    {label: <Link to='/auth'>Auth</Link>, key: 'item-1'}
];

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{marginTop: "60px"}}
                >
                </Menu>
            </Sider>
            <Layout>
                <Header/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/auth"}/>}/>
                            <Route path='/auth'>
                                <Checkout/>
                            </Route>
                            <Route path='/sign-in'>
                                <SignIn/>
                            </Route>
                            <Route path='/sign-up'>
                                <SignUp/>
                            </Route>
                            <Route path='/emails'>
                                <Homepage/>
                            </Route>
                            <Route path='/send-email'>
                                <SendEmail/>
                            </Route>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
        );
    }
}

const mapStateToProps = () => ({})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const EmailApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppContainer/>
            </PersistGate>
        </Provider>
    </HashRouter>
}

export default EmailApp;