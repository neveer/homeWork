import React from 'react';
import ReactDOM from 'react-dom';
import LoginVIew from './components/login/index';
import './style.css';

export class MainContent extends React.Component {
    render() {
        return (<div>
            <LoginVIew />
        </div>);
    }
}


ReactDOM.render(
    <MainContent />,
    document.getElementById('app'),function(cb){

    });