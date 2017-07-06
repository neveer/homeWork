import React from 'react';
import { Row, Col, Input, Button, Alert } from 'antd';
import _ from 'lodash';
import UserInfo from '../../datas/users.json';
import './style.css';

class LoginView extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            userName: '',
            passWord: '',
            logSuccessed: true,
        };
    }
    componentDidMount() {
    }
    onLogin = () => {
        const userId = document.getElementById('input_userId').value;
        const password = document.getElementById('input_password').value;
        const user = _.filter(UserInfo, { UserId: userId, Password: password });
        if (user && user.length > 0) {
            this.props.onLogin('success', userId);
            this.setState({ logSuccessed: true });
        } else {
            this.setState({ logSuccessed: false });
        }
    }
    render() {
        return (<div className="loginView">
            <Row>
                <Col span={8} />
                <Col span={8} >
                    <div className="loginView-title">Log In </div>
                </Col>
                <Col span={8} />
            </Row>
            <Row>
                <Col span={8} />
                <Col span={8} >
                    <div>
                        User ID:
                    </div>
                    <div>
                        <Input id="input_userId" size="large" />
                    </div>
                </Col>
                <Col span={8} />
            </Row>
            <Row>
                <Col span={8} />
                <Col span={8} >
                    <div>
                        Password:
                    </div>
                    <div>
                        <input type="password" id="input_password" className="ant-input ant-input-lg" />
                    </div>
                </Col>
                <Col span={8} />
            </Row>
            <Row>
                <Col span={8} />
                <Col span={8} >
                    <Button type="primary" size="large" onClick={this.onLogin} >Log In</Button>
                </Col>
                <Col span={8} />
            </Row>
            <Row>
                <Col span={8} />
                <Col span={8} >
                    {
                        !this.state.logSuccessed ? <Alert
                            message="Error"
                            description="User ID or Password wrong!"
                            type="error"
                            showIcon /> : ''
                    }
                </Col>
                <Col span={8} />
            </Row>
        </div>);
    }
}
LoginView.propTypes = {
    onLogin: React.PropTypes.func.isRequired,
};
export default LoginView;
