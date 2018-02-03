import React, { PureComponent } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from './actions/conceptActions';
import PropTypes from 'prop-types';



class App extends PureComponent {

  constructor(props) {

      super(props);
       this.state ={
         concepts: Object.assign({},this.props.concepts),
         title: 'Borrowers',
         errors: {}
       };
    }

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Performance with Redux and React 15</h1>
        </header>
        <p className="App-intro">
         
        </p>
      </div>;
  }
}


App.propTypes={
  concepts: PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {concepts: state.concepts};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(conceptActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
