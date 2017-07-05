import React from 'react';
import ReactDOM from 'react-dom';
import LoginView from './components/login/index';
import ContentView from './components/content/index';
import './style.css';

export default class MainContent extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            cookie:null,
            session:null
        }
    }
    onLogin=?(value)=>{
    }
    render() {
        return (<div className="mainContent">
                {
                    this.state.session?<ContentView />:<LoginView  onLogin={this.onLogin}/>
                }
            
        </div>);
    }
}


ReactDOM.render(
    <MainContent />,
    document.getElementById('app'));
