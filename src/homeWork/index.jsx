import React from 'react';
import ReactDOM from 'react-dom';
import LoginView from './components/login/index';
import ContentView from './components/content/index';
import './style.css';

export default class MainContent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            userName: '',
            cookie: null,
            session: null,
            logon: false,
        };
    }
    onLogin = (value, userId) => {
        if (value && value === 'success') {
            this.setState({ cookie: userId, session: userId, logon: true, userName: userId });
        }
    }
    onLogOut=()=>{
         this.setState({ cookie: null, session: null, logon: false, userName: '' });
    }
    render() {
        return (<div className="mainContent">
            {
                this.state.logon ? <ContentView userName={this.state.userName} onLogOut={this.onLogOut} /> : <LoginView onLogin={this.onLogin} />
            }
        </div>);
    }
}


ReactDOM.render(<MainContent />,
    document.getElementById('app'));
