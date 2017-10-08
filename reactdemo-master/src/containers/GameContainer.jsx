import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

class GameContainer extends Component {
  
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchGames());
  }

  render() {
    return (
      <div>
        <h1>Game container</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const {gameList} = state;
  console.log(gameList);
  return {gameList}
}

export default connect(mapStateToProps)(GameContainer);
