import React from 'react';
import actions from '../actions';
import counterStore from '../stores/counterStore';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };

    this.processIncClick = this.processIncClick.bind(this);
    this.processDecClick = this.processDecClick.bind(this);
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((counter) =>{
      this.setState({counter});
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  processIncClick(ev) {
    ev.preventDefault();
    actions.increment();
  }

  processDecClick(ev) {
    ev.preventDefault();
    actions.decrement();
  }


  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.processDecClick}>
            -
          </button>
          <button className='increment' onClick={this.processIncClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
