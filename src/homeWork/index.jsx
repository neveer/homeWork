import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class MainContent extends React.Component {
    render() {
        return (<div>
            <h1>Hello Word!</h1>
        </div>);
    }
}
ReactDOM.render(
    MainContent,
    document.getElementById('app'));