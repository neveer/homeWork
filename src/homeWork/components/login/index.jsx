import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import './style.css';

export class LoginView extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            userName: '',
            passWord: '',
            loginOn: false
        }
    }
    componentDidMount() {

    }
    render() {
        return (<div>
            <Row>
                <Col span={12}></Col>
            </Row>
            <Row>
                <Col span={12}></Col>
            </Row>
            <Row>
                <Col span={12}></Col>
            </Row>
            <Row>
                <Col span={12}></Col>
            </Row>
        </div>);

    }
}
