import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App name='Kilgore' />, root);
